package com.sample.financialgoaltracker.dto;

import org.springframework.stereotype.Component;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.sql.Time;

@Component
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class UserDTO {
     
    private int id;

    private String name;

    private String email;

    private String auth0Id;

    private String phone;

    private String country;

    private String createdAt;

    private String createdBy;

    private String modifiedAt;

    private String modifiedBy;

    private boolean isDeleted;

    private ProfilePictureDTO profilePicture;

}
