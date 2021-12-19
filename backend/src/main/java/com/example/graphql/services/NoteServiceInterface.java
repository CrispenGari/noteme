package com.example.graphql.services;
import com.example.graphql.models.Note;
import java.util.Collection;



public interface NoteServiceInterface {

    Note createNote(Note note);
    Note updateNote(Note note);
    Boolean deleteNote(Long id);
    Note findNote(Long id);
}
