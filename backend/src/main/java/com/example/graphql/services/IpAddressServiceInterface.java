package com.example.graphql.services;

import com.example.graphql.models.IpAddress;

public interface IpAddressServiceInterface {
    IpAddress createIpAddress(IpAddress ipAddress);
    Boolean deleteIpAddress(String ipAddress);
    IpAddress findIpAddress(String ipAddress);
}
