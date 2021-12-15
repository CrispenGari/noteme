package com.example.graphql.models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Value
@Builder
public class Notes extends SharedColumns implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO )
    private Long id;

    @Column(nullable = false, unique = true)
    private String ipAddress;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

}
