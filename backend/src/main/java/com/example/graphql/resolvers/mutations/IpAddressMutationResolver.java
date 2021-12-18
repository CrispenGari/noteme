package com.example.graphql.resolvers.mutations;

import com.example.graphql.models.IpAddress;
import com.example.graphql.resolvers.inputs.IpAddressInput;
import com.example.graphql.resolvers.objects.IpAddressResponse;
import com.example.graphql.resolvers.objects.Error;
import com.example.graphql.resolvers.objects.IpAddressType;
import com.example.graphql.services.IpAddressService;
import graphql.kickstart.tools.GraphQLMutationResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class IpAddressMutationResolver implements GraphQLMutationResolver {
    private final IpAddressService ipAddressService;
   public IpAddressResponse createIpAddress(IpAddressInput input){
        IpAddress ip = new IpAddress();
        ip.setIpAddress(input.getIpAddress());
        try {
            IpAddress ip_add = this.ipAddressService.createIpAddress(ip);
            return IpAddressResponse.builder().ipAddress(
                    IpAddressType.builder()
                            .ipAddress(ip_add.getIpAddress())
                            .id(ip_add.getId())
                            .createdAt(ip_add.getCreatedAt().toString())
                            .updatedAt(ip_add.getUpdatedAt().toString())
                            .build()
            ).build();
        }catch (Exception e){
            return IpAddressResponse.builder().error(
                    Error.builder()
                            .message(e.getMessage())
                            .field("ipAddress")
                            .build()
            ).build();
        }
    };

   public Boolean deleteIpAddress(IpAddressInput input){
       try {
           IpAddress ipAddress = ipAddressService.findIpAddress(input.getIpAddress());
           this.ipAddressService.deleteIpAddress(ipAddress.getIpAddress());
           return  true;
       }catch (Exception e){
           return false;
       }

   }
}
