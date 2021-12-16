package com.example.graphql.resolvers.inputs;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class CreateIPAddressInput {
    private String ipAddress;
}
