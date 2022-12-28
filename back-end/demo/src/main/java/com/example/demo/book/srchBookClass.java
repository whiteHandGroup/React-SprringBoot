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

    @PostMapping("/insertBook")
    public void createBook(@RequestBody Book book) {
        System.out.println(book.getBk_name());
        System.out.println(book.getBk_author());
        System.out.println(book.getBk_publisher());
        System.out.println(book.getBk_price());

    }
}
