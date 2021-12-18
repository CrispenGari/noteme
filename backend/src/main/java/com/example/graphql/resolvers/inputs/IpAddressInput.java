package com.example.graphql.resolvers.inputs;
import lombok.*;
import java.io.Serializable;
@Data
public class IpAddressInput implements Serializable {
    private String ipAddress;
}
