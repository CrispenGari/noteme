package com.example.graphql.resolvers.queries;

import com.example.graphql.models.Note;
import com.example.graphql.resolvers.inputs.GetNoteInput;
import com.example.graphql.resolvers.objects.Error;
import com.example.graphql.resolvers.objects.NoteResponse;
import com.example.graphql.resolvers.objects.NoteType;
import com.example.graphql.services.NoteService;
import graphql.kickstart.tools.GraphQLQueryResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class NoteQueryResolver implements GraphQLQueryResolver {
    private final NoteService noteService;
   public NoteResponse findNote(GetNoteInput input){
       try {
           Note note = noteService.findNote(input.getId());
           return NoteResponse
                   .builder()
                   .note(
                       NoteType
                               .builder()
                               .content(note.getContent())
                               .id(note.getId())
                               .title(note.getTitle())
                               .createdAt(note.getCreatedAt().toString())
                               .updatedAt(note.getUpdatedAt().toString())
                               .build()
                   )
                   .build();

       }catch (Exception e){
           return NoteResponse.builder().error(
                   Error.builder()
                           .field("noteId").message(
                                   "could not find the note with id: " + input.getId()
                           ).build()
           ).build();
       }
   }
}
