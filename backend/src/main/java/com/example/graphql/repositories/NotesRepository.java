package com.example.graphql.repositories;
import com.example.graphql.models.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotesRepository extends JpaRepository<Note, Long> {
}
