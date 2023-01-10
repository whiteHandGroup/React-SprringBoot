package com.example.demo.book;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.ToString;

/*
*
[사용 어노테이션 정리]
@Entity를 사용하는 이유는 JPA가 관리하는 것임을 나타내기 위해서다.
@Entity : DB의 테이블을 뜻함 [ Spring Data JPA 에서는 반드시 @Entity 어노테이션을 추가해야 함 ]
@Table : DB 테이블의 이름을 명시 [ 테이블 명과 클래스 명이 동일한 경우 생략 가능 ]
@Getter : Lombok의 Getter를 이용해 Getter 메소드를 생성하고 @Builder 를 이용해서 객체를 생성할 수 있게 처리한다.
@Builder를 이용하기 위해 @AllArgsConstructor 와 @NoArgsConstructor 를 같이 처리해야 컴파일 에러가 발생하지 않음
@Id : Primary Key를 뜻함
@GeneratedValue : Primary Key의 키 생성 전략(Strategy)을 설정하고자 할 때 사용
  GenerationType.IDENTITY : MySQL의 AUTO_INCREMENT 방식을 이용
  GenerationType.AUTO(default) : JPA 구현체(Hibernate)가 생성 방식을 결정
  GenerationType.SEQUENCE : DB의 SEQUENCE를 이용해서 키를 생성. @SequenceGenerator와 같이 사용
  GenerationType.TABLE : 키 생성 전용 테이블을 생성해서 키 생성. @TableGenerator와 함께 사용
@Column : DB Column을 명시
@Column과 반대로 테이블에 컬럼으로 생성되지 않는 필드의 경우엔 @Transient 어노테이션을 적용한다.
*/

@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="Book")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bk_seq;

    @Column(insertable=true, nullable = false)
    private String bk_name;
    private String bk_publisher;
    private String bk_author;
    private String bk_genre;
    private String bk_price;

    @Column(nullable = false)
    private int bk_stock;

    private String bk_img;

    @Column(nullable = false)
    private String reg_user;
    @Column(nullable = false)
    private LocalDateTime reg_date; // 생성일

    //@Column(nullable = false)
    private String mod_user;        // 생성자
    private LocalDateTime mod_date; // 수정일
    private String bk_sum; // 수정일

    @Builder
    public Book(String bk_name, String bk_publisher, String bk_author,
                String reg_user, String bk_price, int bk_stock, String bk_img,
                LocalDateTime reg_date, String mod_user, LocalDateTime mod_date,
                String bk_sum
    ) {
        //this.bk_seq = bk_seq;
        this.bk_name = bk_name;
        this.bk_publisher = bk_publisher;
        this.bk_author = bk_author;
        this.bk_price = bk_price;
        this.bk_stock = bk_stock;
        this.bk_img = bk_img;
        this.reg_user = reg_user;
        this.reg_date = reg_date;
        this.mod_user = mod_user;
        this.mod_date = mod_date;
        this.bk_sum = bk_sum;
    }
}


