package com.example.graphql.services;
import com.example.graphql.repositories.NotesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Service
@Transactional
@RequiredArgsConstructor
public class PhoneConfigService implements PhoneConfigServiceInterface{

    private final NotesRepository repository;
    @Override
    public PhoneConfig createPhoneConfig(PhoneConfig phoneConfig) {
        return null;
    }

    @Override
    public Boolean deletePhoneConfig(Long id) {
        return true;
    }

    @Override
    public PhoneConfig findPhoneConfig(Long id) {

        return  null;
    }
}
