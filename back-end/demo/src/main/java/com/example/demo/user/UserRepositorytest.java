package com.example.demo.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RequestMapping(value = "/api/crud", method = RequestMethod.GET)
@RestController
public class UserRepositorytest {

  @Autowired
  private UserRepository userRepository;
  
  @PostMapping("/insert")
  void insert() {	
    System.out.println("유저 삽입");
    // User 생성
    User user = User.builder()
            .email("test01@gmail.com")
            .phone("010-1234-5678")
            .createdBy("admin")
            .updatedBy("Glenn")
            .build();
    // Create! 테이블 posts에 id 값이 있으면 update, 없으면 insert 수행
    userRepository.save(user);
  }
  
  @PostMapping("/select")
  void select() {	
    System.out.println("모든 유저 조회");
    System.out.println(userRepository.findAll());
  }
}