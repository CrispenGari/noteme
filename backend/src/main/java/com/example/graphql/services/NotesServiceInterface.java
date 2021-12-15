package com.example.graphql.services;
import com.example.graphql.models.Notes;
import java.util.Collection;



public interface NotesServiceInterface {

    Notes createNote(Notes note);
    Notes updateNote(Notes note);
    Boolean deleteNote(Long id);
    Notes findNote(Long id);
    Collection<Notes> findNotes(String ipAddress);
}
