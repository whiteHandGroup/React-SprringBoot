package com.example.demo.book;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
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
    void createBook(@RequestBody Book bookInfo) {
        System.out.println(bookInfo.getBk_name());
        System.out.println(bookInfo.getBk_author());
        System.out.println(bookInfo.getBk_publisher());
        System.out.println(bookInfo.getBk_price());

        Book book = Book.builder()
            .bk_name(bookInfo.getBk_name())
            .bk_author(bookInfo.getBk_author())
            .bk_publisher(bookInfo.getBk_publisher())
            .bk_price(bookInfo.getBk_price())
            .reg_user("Ban")
            .reg_date(LocalDateTime.now())
            .mod_user("Ban")
            .mod_date(LocalDateTime.now())
            .build();

        bookRepository.save(book);
    }
}
