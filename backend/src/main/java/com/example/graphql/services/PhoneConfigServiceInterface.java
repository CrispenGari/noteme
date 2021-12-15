package com.example.graphql.services;

public interface PhoneConfigServiceInterface {
    PhoneConfig createPhoneConfig(PhoneConfig phoneConfig);
    Boolean deletePhoneConfig(Long id);
    PhoneConfig findPhoneConfig(Long id);
}
