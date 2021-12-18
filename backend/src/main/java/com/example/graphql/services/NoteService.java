package com.example.graphql.services;

import com.example.graphql.models.IpAddress;
import com.example.graphql.models.Note;
import com.example.graphql.repositories.NotesRepository;
import com.example.graphql.repositories.IpAddressRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;

@Service
@Transactional
@RequiredArgsConstructor
public class NoteService implements NoteServiceInterface {

    private final NotesRepository repository;
    @Override
    public Note createNote(Note note) {
        return  this.repository.save(note);
    }

    @Override
    public Note updateNote(Note note) {
        return this.repository.save(note);
    }

    @Override
    public Boolean deleteNote(Long id) {
     return null;
    }

    @Override
    public Note findNote(Long id) {
       return null;
    }

    @Override
    public Collection<Note> findNotes(String ipAddress) {
       return null;
    }
}
