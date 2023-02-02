package com.example.demo.book;

import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

public class searchSpecification {

    // search : title
    public static Specification<Book> likeBk_sum(String bk_sum) {
        return new Specification<Book>() {
            @Override
            public Predicate toPredicate(Root<Book> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
                return criteriaBuilder.like(root.get("bk_sum"), "%" + bk_sum + "%");
            }
        };
    }
    // search : contents
//    public static Specification<Todo> likeContents(String contents) {
//        return new Specification<Todo>() {
//            @Override
//            public Predicate toPredicate(Root<Todo> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
//                // 2) like
//                return criteriaBuilder.like(root.get("contents"), "%" + contents + "%");
//            }
//        };
//    }
}
