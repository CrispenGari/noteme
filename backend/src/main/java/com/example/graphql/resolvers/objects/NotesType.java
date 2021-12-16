package com.example.graphql.resolvers.objects;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class NotesType {
    private String createdAt;
    private String updatedAt;
    private String content;
    private Long id;
    private String title;
}
