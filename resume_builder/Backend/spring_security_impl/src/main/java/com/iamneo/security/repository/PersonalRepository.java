package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.personal;

public interface PersonalRepository extends JpaRepository<personal,Integer>{
    
}
