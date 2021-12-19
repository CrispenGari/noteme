package com.example.graphql.services;
import com.example.graphql.models.Note;
import com.example.graphql.repositories.NotesRepository;
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
        System.out.println("deleting the note of id: " + id);
      this.repository.deleteById(id);
      return true;
    }

    @Override
    public Note findNote(Long id) {
       return this.repository.findById(id).orElseThrow(()-> new RuntimeException("" +
               "could not find the note with the given id"));
    }

}
