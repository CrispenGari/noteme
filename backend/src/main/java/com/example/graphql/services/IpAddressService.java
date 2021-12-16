package com.example.graphql.services;
import com.example.graphql.models.IpAddress;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Service
@Transactional
@RequiredArgsConstructor
public class IpAddressService implements IpAddressServiceInterface {

    @Override
    public IpAddress createIpAddress(IpAddress ipAddress) {
        return null;
    }

    @Override
    public Boolean deleteIpAddress(Long id) {
        return null;
    }

    @Override
    public IpAddress findIpAddress(Long id) {
        return null;
    }
}
