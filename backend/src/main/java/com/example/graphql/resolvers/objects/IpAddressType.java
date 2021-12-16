package com.example.graphql.resolvers.objects;


import lombok.Builder;
import lombok.Value;

import java.util.Set;

@Value
@Builder
public class IpAddressType {
    private String createdAt;
    private String updatedAt;
    private String ipAddress;
    private Long id;
//    private Set<NotesType> notes;
}
