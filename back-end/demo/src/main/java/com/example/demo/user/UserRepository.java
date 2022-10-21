package com.example.demo.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/*
  @Repository
  따로 쿼리문 작성없이 생성, 조회, 업데이트, 삭제(CRUD)를 할 수 있게 기능을 제공해줌
  제너릭 타입으로는 첫번째부터, <Entity, PrimaryKey의 타입>을 넣는다
  
  보통 ibatis, Mybatis 등에서 Dao라고 불리는 DB Layer 접근자이다.
  
  JPA에서는 보통 Repository라고 부르며 인터페이스로 생성한다. 단순히 인터페이스를 생성 후, JpaRepository<Entity클래스, PK타입>를 상속하면 
  기본적인 CRUD 메소드가 자동으로 생성된다.
  여기서 주의할 점은 Entity클래스와 기본 Entity Repository는 함께 위치해야 한다는 것이다!
 */

@Repository
public interface UserRepository extends JpaRepository<User, Long> {	

}

