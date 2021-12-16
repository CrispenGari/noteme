package com.example.graphql.resolvers.objects;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class Error {
    private String message;
    private String field;
}
