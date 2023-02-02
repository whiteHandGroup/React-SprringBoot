package com.example.demo.book;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
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

    @PostMapping("/selectAllBook")
    public Page<Book> bookList(@RequestParam(defaultValue = "empty") String searchWord, Pageable pageable) {
        System.out.println( "페이지정보=" + pageable + "\n" +  "페이지 사이즈=" + pageable.getPageSize() + "\n" + "페이지 넘버=" + pageable.getPageNumber());

        Page<Book> list = null;

        if(searchWord.equals("empty")){
            list =  bookRepository.findAll(pageable);
        }else{
            Specification<Book> spec = Specification.where(searchSpecification.likeBk_sum(searchWord));
            spec = spec.and(searchSpecification.likeBk_sum(searchWord));
            list = bookRepository.findAll(spec, pageable);
        }
        return list;
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
