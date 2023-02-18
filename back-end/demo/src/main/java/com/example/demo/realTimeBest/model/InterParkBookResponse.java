package com.example.demo.realTimeBest.model;

import lombok.Data;

import java.util.List;

@Data
public class InterParkBookResponse {
    private String title;
    private String link;
    private String language;
    private String copyright;
    private String pubDate;
    private String imageUrl;
    private String totalResults;
    private String startIndex;
    private String itemsPerPage;
    private String maxResults;
    private String queryType;
    private String searchCategoryId;
    private String searchCategoryName;
    private String returnCode;
    private String returnMessage;
    private List<interParkBook> item;
}
