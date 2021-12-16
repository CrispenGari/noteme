package com.example.graphql.resolvers.mutations;

import com.example.graphql.models.IpAddress;
import com.example.graphql.repositories.IpAddressRepository;
import com.example.graphql.resolvers.inputs.CreateIPAddressInput;
import com.example.graphql.resolvers.objects.CreateIpAddressResponse;
import com.example.graphql.resolvers.objects.IpAddressType;
import graphql.kickstart.tools.GraphQLMutationResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class IpAddressMutationResolver implements GraphQLMutationResolver {
    private final IpAddressRepository repository;
    CreateIpAddressResponse createIpAddress(CreateIPAddressInput input){
        IpAddress ip = new IpAddress();
        ip.setIpAddress(input.getIpAddress());
        IpAddress ip_add = this.repository.save(ip);

        return CreateIpAddressResponse.builder().ipAddress(
                IpAddressType.builder()
                        .ipAddress(ip_add.getIpAddress())
                        .id(ip_add.getId())
                        .createdAt(ip_add.getCreatedAt().toString())
                        .updatedAt(ip_add.getUpdatedAt().toString())
                        .build()
        ).build();
    };
}
