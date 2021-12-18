package com.example.graphql.resolvers.objects;
import lombok.*;
@Value
@Builder
public class NoteResponse {
    private Error error;
    private NoteType note;
}
