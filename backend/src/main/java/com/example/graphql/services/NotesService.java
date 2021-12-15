package com.example.graphql.services;

import com.example.graphql.models.Notes;
import com.example.graphql.repositories.NotesRepository;
import com.example.graphql.repositories.PhoneConfigRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;

@Service
@Transactional
@RequiredArgsConstructor
public class NotesService implements NotesServiceInterface{

    private final NotesRepository repository;
    private final PhoneConfigRepository phoneConfigRepository;
    @Override
    public Notes createNote(Notes note) {
        return  this.repository.save(note);
    }

    @Override
    public Notes updateNote(Notes note) {
        return this.repository.save(note);
    }

    @Override
    public Boolean deleteNote(Long id) {
        Notes note = this.findNote(id);
        if(note.getId() == null){
            return false;
        }
        this.repository.deleteById(id);
        return true;
    }

    @Override
    public Notes findNote(Long id) {
        return this.repository.findById(id).orElseThrow(()-> new RuntimeException("failed to find the note"));
    }

    @Override
    public Collection<Notes> findNotes(String ipAddress) {
        PhoneConfig config = this.phoneConfigRepository.findByIpAddress(ipAddress);
        if(config.getIpAddress() == null){
            throw new RuntimeException("failed to get the config.");
        }
      return config.getNotes();
    }
}