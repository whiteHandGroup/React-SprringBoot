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


    // retrieve specific book Using bk_seq
    /*@PostMapping("/user/select/{no}")
    public User findById(@PathVariable Long no) {
        return bookRepository.findById(no).orElseThrow(()->new IllegalArgumentException("해당 유저가 없습니다. id=" + no));
    }*/
}
