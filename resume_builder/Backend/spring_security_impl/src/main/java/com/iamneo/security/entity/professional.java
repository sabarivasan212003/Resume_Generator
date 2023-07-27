package com.iamneo.security.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class professional {
    @Id
    private String positiontitle;
    private String experience;
    private String startdate;
    public String getPositiontitle() {
        return positiontitle;
    }
    public void setPositiontitle(String positiontitle) {
        this.positiontitle = positiontitle;
    }
    public String getExperience() {
        return experience;
    }
    public void setExperience(String experience) {
        this.experience = experience;
    }
    public String getStartdate() {
        return startdate;
    }
    public void setStartdate(String startdate) {
        this.startdate = startdate;
    }
    public String getEnddate() {
        return enddate;
    }
    public void setEnddate(String enddate) {
        this.enddate = enddate;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    private String enddate;
    private String description;
}
