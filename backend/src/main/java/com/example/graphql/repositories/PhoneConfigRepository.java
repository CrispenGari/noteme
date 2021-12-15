package com.example.graphql.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PhoneConfigRepository extends JpaRepository<PhoneConfig, Long> {
   PhoneConfig findByIpAddress(String ipAddress);
}
