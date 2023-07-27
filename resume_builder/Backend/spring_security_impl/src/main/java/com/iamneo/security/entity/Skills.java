package com.iamneo.security.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Skills {
    @Id
    private String skill1;
    private String skill2;
    private String skill3;
    public String getSkill1() {
        return skill1;
    }
    public void setSkill1(String skill1) {
        this.skill1 = skill1;
    }
    public String getSkill2() {
        return skill2;
    }
    public void setSkill2(String skill2) {
        this.skill2 = skill2;
    }
    public String getSkill3() {
        return skill3;
    }
    public void setSkill3(String skill3) {
        this.skill3 = skill3;
    }
    public String getSkill4() {
        return skill4;
    }
    public void setSkill4(String skill4) {
        this.skill4 = skill4;
    }
    private String skill4;
}
