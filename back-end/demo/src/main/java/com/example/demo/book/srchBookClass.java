package com.example.demo.book;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin

@RequestMapping(value = "/book", method = RequestMethod.GET)
public class srchBookClass {
    @Autowired
    private BookRepository bookRepository;

    // retrieve all books
    @PostMapping("/selectAllBook")
    public List<Book> findAll() {
        System.out.println("모든 책 조회");
        System.out.println(bookRepository.findAll());
        return bookRepository.findAll();
    }

//    지환이형
//    @PostMapping("/insertBook")
//    public List<Book> findAll() {
//        System.out.println("책 추가");
//        System.out.println(bookRepository.findAll());
//        return bookRepository.findAll();
//    }
}
