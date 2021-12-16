package com.example.graphql.resolvers.objects;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class CreateIpAddressResponse {
    private Error error;
    private IpAddressType ipAddress;
}
