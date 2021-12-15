package com.example.graphql.repositories;
import com.example.graphql.models.Notes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotesRepository extends JpaRepository<Notes, Long> {
}
