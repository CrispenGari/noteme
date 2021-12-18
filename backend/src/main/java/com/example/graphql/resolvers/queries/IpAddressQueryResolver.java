package com.example.graphql.resolvers.queries;

import com.example.graphql.models.IpAddress;
import com.example.graphql.models.Note;
import com.example.graphql.resolvers.inputs.IpAddressInput;
import com.example.graphql.resolvers.objects.IpAddressResponse;
import com.example.graphql.resolvers.objects.Error;
import com.example.graphql.resolvers.objects.IpAddressType;
import com.example.graphql.resolvers.objects.NoteType;
import com.example.graphql.services.IpAddressService;
import graphql.kickstart.tools.GraphQLQueryResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class IpAddressQueryResolver implements GraphQLQueryResolver {
    private final IpAddressService ipAddressService;
    public IpAddressResponse findIpAddress(IpAddressInput input) {

        try {
            IpAddress ipAddress = ipAddressService.findIpAddress(input.getIpAddress());
            return IpAddressResponse.builder()
                    .ipAddress(
                            IpAddressType.builder()
                                    .ipAddress(ipAddress.getIpAddress())
                                    .id(ipAddress.getId())
                                    .createdAt(ipAddress.getCreatedAt().toString())
                                    .updatedAt(ipAddress.getUpdatedAt().toString())
                                    .notes(ipAddress.getNotes().stream().map(note ->
                                            NoteType.builder()
                                                    .title(note.getTitle())
                                                    .id(note.getId())
                                                    .createdAt(note.getCreatedAt().toString())
                                                    .updatedAt(note.getUpdatedAt().toString())
                                                    .content(note.getContent())
                                                    .build()).collect(Collectors.toList())
                                    )
                                    .build()
                    )
                    .build();
        } catch (Exception e) {
            System.out.println(e);
            return IpAddressResponse.builder().error(
                    Error.builder().message("could not find the ip address: " + input.getIpAddress())
                            .field("ipAddress").build()
            ).build();
        }
    }
}
