package com.example.graphql.repositories;

import com.example.graphql.models.IpAddress;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IpAddressRepository extends JpaRepository<IpAddress, Long> {
   IpAddress findByIpAddress(String ipAddress);
}
