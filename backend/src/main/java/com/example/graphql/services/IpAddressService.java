package com.example.graphql.services;
import com.example.graphql.models.IpAddress;
import com.example.graphql.repositories.IpAddressRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Service
@Transactional
@RequiredArgsConstructor
public class IpAddressService implements IpAddressServiceInterface {

    private final IpAddressRepository repository;
    @Override
    public IpAddress createIpAddress(IpAddress ipAddress) {
        return this.repository.save(ipAddress);
    }

    @Override
    public Boolean deleteIpAddress(String ipAddress) {
        IpAddress ipAddress1 = this.repository.findByIpAddress(ipAddress);
        if(ipAddress1.getIpAddress() == null){
            return  false;
        }
        this.repository.delete(ipAddress1);
        return true;
    }

    @Override
    public IpAddress findIpAddress(String ipAddress) {
        return this.repository.findByIpAddress(ipAddress);
    }
}
