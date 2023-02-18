package com.example.demo.realTimeBest.controller;

import com.example.demo.realTimeBest.model.InterParkBookResponse;
import com.example.demo.realTimeBest.model.interParkBook;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping(value = "/realTimeBest", method = RequestMethod.GET)
public class realTimeBestController {

    @PostMapping("/crawl")
    public ResponseEntity<Set<String>> dataCompare() throws IOException {

        // 1. 영풍 vs 알라딘
        Set<String> ypBookList1 = ypBookCrawl();
        Set<String> aladinList1 = aladinBookCrawl();
        ypBookList1.retainAll(aladinList1);
        Set<String> bestSellersList1 = ypBookList1;

        // 2. 영풍 vs 인터파크
        Set<String> ypBookList2 = ypBookCrawl();
        Set<String> itpList1 = itpBookAPI();
        ypBookList2.retainAll(itpList1);
        Set<String> bestSellersList2 = ypBookList2;

        // 3. 알라딘 vs 인터파크
        Set<String> aladinList2 = aladinBookCrawl();
        Set<String> itpList2 = itpBookAPI();
        aladinList2.retainAll(itpList2);
        Set<String> bestSellersList3 = aladinList2;

        // 위 1,2,3을 합치는 과정
        Set<String> mergeList = new HashSet<>();
        mergeList.addAll(bestSellersList1);
        mergeList.addAll(bestSellersList2);
        mergeList.addAll(bestSellersList3);

        System.out.println("bestSellers List = "+ mergeList);
        return new ResponseEntity<>(mergeList, HttpStatus.OK);
    }

    // yes24 베스트 셀러 크롤링
    private Set aladinBookCrawl() throws IOException {
        Document aladin = Jsoup.connect("https://www.aladin.co.kr/shop/common/wbest.aspx?BranchType=1&BestType=NowBest").get();
        Elements elementAladin = aladin.select(".bo3");

        String[] strList = new String[elementAladin.size()];
        int i = 0;
        for (Element element : elementAladin) {
            strList[i] = element.text();
            i++;
        }
        Set<String> aladinList = new HashSet<>(Arrays.asList(strList));
        return aladinList;
    }

    // 영풍문고 베스트 셀러 크롤링
    private Set ypBookCrawl() throws IOException {
        Document youngpoong = Jsoup.connect("https://www.ypbooks.co.kr/m_bestseller.yp").get();
        Elements elementY = youngpoong.select(".info-tit");

        String[] strList = new String[10];
        int i = 0;
        for (Element element : elementY) {
            strList[i] = element.text();
            i++;
        }
        Set<String> ypList = new HashSet<>(Arrays.asList(strList));
        return ypList;
    }

    // 인터파크 도서 베스트셀러 api 연동
    private Set itpBookAPI() throws IOException {
        /*
         * 1. api_key 발급 장소 : http://book.interpark.com/blog/basicInfoManageTotalForm.rdo(안상재 계정으로 들어가서 받아야함. 필요시 문의)
         * 2. api 사용 예시 사이트 : http://book.interpark.com/bookPark/html/bookpinion/api_bestseller.html
         * 3. api 사용 횟수 : 하루 10000회
         * 3. RestTemplate 사용? : RestTemplate은 HTTP 요청을 만들고 서버로 보내는 데 사용할 수 있습니다. 이를 통해 RESTful 웹 서비스를 호출하거나
         *                        외부 API와 통신할 수 있습니다. RestTemplate은 Java의 기본 HttpURLConnection API 대신 사용할 수 있으며,
         *                        다양한 HTTP 메서드(GET, POST, PUT, DELETE 등)를 지원합니다.
         *                        또한, HTTP 요청 및 응답의 커스터마이징이 가능하며, JSON, XML 등 다양한 데이터 형식을 처리할 수 있습니다.
         */
        RestTemplate restTemplate = new RestTemplate();
        String API_KEY = "539AFDCAD21C20F7BB7B191ABA7CC94FBCC3290EE1294E072B7CA08CC9175102";
        String url = "http://book.interpark.com/api/bestSeller.api?key="+API_KEY+"&categoryId=100&output=json";  // 인터파크에 데이터 요청
        String result = restTemplate.getForObject(url, String.class);  // 인터파크 도서 API에서 반환된 JSON 데이터

        // ObjectMapper는 JSON 데이터를 자바 객체로 변환해주는 클래스. readValue() 메서드를 이용하여 JSON 데이터를 자바 객체로 변환할 수 있음.
        ObjectMapper objectMapper = new ObjectMapper();
        InterParkBookResponse interParkBookResponse = objectMapper.readValue(result, InterParkBookResponse.class);

        String[] strList = new String[interParkBookResponse.getItem().size()];
        int i = 0;
        for(interParkBook book : interParkBookResponse.getItem()){
            strList[i] = book.getTitle();
            i++;
        }
        Set<String> itpList = new HashSet<>(Arrays.asList(strList));
        return itpList;
    }
}
