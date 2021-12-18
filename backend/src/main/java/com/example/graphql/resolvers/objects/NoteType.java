package com.example.graphql.resolvers.objects;

import lombok.Builder;
import lombok.Data;
import lombok.Value;

@Value
@Builder
@Data
public class NoteType {
    private String createdAt;
    private String updatedAt;
    private String content;
    private Long id;
    private String title;
}
