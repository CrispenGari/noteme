package com.example.graphql.models;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Collection;


@Entity
@Table(name="ip_addresses")
@Data
@NoArgsConstructor
public class IpAddress extends SharedColumns implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String ipAddress;

    @OneToMany(mappedBy = "ipAddress", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Collection<Note> notes;

}
