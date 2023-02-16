package com.example.demo.book;

import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.time.LocalDateTime;
import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin
@RequestMapping(value = "/book", method = RequestMethod.GET)
public class srchBookClass {
    @Autowired
    private BookRepository bookRepository;
    private final JPAQueryFactory queryFactory;
    private QBook qbook;
    @PostConstruct
    public void init() {
        qbook = QBook.book;
    }
    @PostMapping("/selectAllBook")
    public Page<Book> bookList(@RequestParam(defaultValue = "") String searchWord,
                               @RequestParam(defaultValue = "") String searchType,
                               @PageableDefault(size = 10, page = 0) Pageable pageable) {

        JPAQuery<Book> query = queryFactory
                .select(Projections.constructor(Book.class,
                        qbook.bk_seq, qbook.bk_name, qbook.bk_publisher,
                        qbook.bk_author, qbook.bk_genre, qbook.bk_price,
                        qbook.bk_stock, qbook.bk_img, qbook.reg_user,
                        qbook.reg_date, qbook.mod_user, qbook.mod_date,
                        qbook.bk_sum))
                .from(qbook)
                .where(containKeyword(searchWord, searchType));

        long total = query.fetchCount();

        List<Book> contents = query
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        return new PageImpl<>(contents, pageable, total);
    }

    private BooleanExpression containKeyword(String searchWord, String searchType){
        if((searchWord == null || searchWord.isEmpty()) && searchType.isEmpty()){
            return null;
        }else if(searchType.equals("bk_name")) {
            return qbook.bk_name.like("%" + searchWord + "%");
        }else if (searchType.equals("bk_sum")) {
            return qbook.bk_sum.like("%" + searchWord + "%");
        }else if (searchType.equals("bk_publisher")) {
            return qbook.bk_publisher.like("%" + searchWord + "%");
        }else if (searchType.equals("bk_author")) {
            return qbook.bk_author.like("%" + searchWord + "%");
        }
        return qbook.bk_sum.like("%" + searchWord + "%");
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