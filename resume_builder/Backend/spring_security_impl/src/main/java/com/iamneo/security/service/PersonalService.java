package com.iamneo.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// import com.github.andrewoma.dexx.collection.List;
import com.iamneo.security.entity.personal;
import com.iamneo.security.repository.PersonalRepository;

@Service
public class PersonalService {
    @Autowired
    PersonalRepository repository;
    public java.util.List<personal> getpersonal(){
        return  repository.findAll();
    }
    public String postpersonal(personal per){
        System.out.println(per.getAge());
        System.out.println(per.getCity());
        System.out.println(per.getDob());
               repository.save(per);
               return "added";
    }
}
