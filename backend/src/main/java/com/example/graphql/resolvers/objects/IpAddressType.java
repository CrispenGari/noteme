package com.example.graphql.resolvers.objects;


import com.example.graphql.models.Note;
import lombok.Builder;
import lombok.Value;
import java.util.Collection;

@Value
@Builder
public class IpAddressType {
    private String createdAt;
    private String updatedAt;
    private String ipAddress;
    private Long id;
    private Collection<NoteType> notes;
}
