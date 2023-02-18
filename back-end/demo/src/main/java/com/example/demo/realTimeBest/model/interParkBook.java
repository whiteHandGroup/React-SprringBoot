package com.example.demo.realTimeBest.model;

import lombok.Data;

// http://book.interpark.com/bookPark/html/bookpinion/api_bestseller.html 지원하는 api내용 확인
@Data
public class interParkBook {
    private String itemId;
    private String title;
    private String description;
    private String pubDate;
    private String priceStandard;
    private String priceSales;
    private String discountRate;
    private String saleStatus;
    private String mileage;
    private String mileageRate;
    private String coverSmallUrl;
    private String coverLargeUrl;
    private String categoryId;
    private String categoryName;
    private String publisher;
    private String customerReviewRank;
    private String author;
    private String translator;
    private String isbn;
    private String link;
    private String mobileLink;
    private String additionalLink;
    private String reviewCount;
    private String rank;
}
