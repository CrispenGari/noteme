package com.example.graphql.models;
import lombok.*;
import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "notes")
@NoArgsConstructor
@Data
public class Note extends SharedColumns implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO )
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "ipAddress_id", nullable = false)
    private IpAddress ipAddress;
}
