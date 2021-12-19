package com.example.graphql.resolvers.mutations;
import com.example.graphql.models.IpAddress;
import com.example.graphql.models.Note;
import com.example.graphql.resolvers.inputs.GetNoteInput;
import com.example.graphql.resolvers.inputs.NoteInput;
import com.example.graphql.resolvers.inputs.UpdateNoteInput;
import com.example.graphql.resolvers.objects.Error;
import com.example.graphql.resolvers.objects.NoteResponse;
import com.example.graphql.resolvers.objects.NoteType;
import com.example.graphql.services.IpAddressService;
import com.example.graphql.services.NoteService;
import graphql.kickstart.tools.GraphQLMutationResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class NoteMutationResolver implements GraphQLMutationResolver {

    private final NoteService noteService;
    private final IpAddressService ipAddressService;
    public NoteResponse createNote(NoteInput input){
        IpAddress ipAddress;
        try{
            ipAddress = ipAddressService.findIpAddress(input.getIpAddress());
            Note note = new Note();
            note.setContent(input.getContent());
            note.setTitle(input.getTitle());
            note.setIpAddress(ipAddress);

            Note note1 = noteService.createNote(note);
            return NoteResponse.builder()
                    .note(
                            NoteType.builder()
                                    .createdAt(note1.getCreatedAt().toString())
                                    .updatedAt(note1.getUpdatedAt().toString())
                                    .id(note1.getId())
                                    .content(note1.getContent())
                                    .title(note1.getTitle())
                                    .build()
                    )
                    .build();

        }catch(Exception e){
            return NoteResponse.builder().error(
                    Error.builder().field("ipAddress").message("could not find the ip address: "+ input.getIpAddress()).build()
            ).build();
        }
    }

    public Boolean deleteNote(GetNoteInput input){
        try {
            Note note = this.noteService.findNote(input.getId());
            return this.noteService.deleteNote(note.getId());
        }catch (Exception e){
            return false;
        }
    }

    public NoteResponse updateNote(UpdateNoteInput input){
        try {
            Note note = this.noteService.findNote(input.getId());
            note.setContent(input.getContent());
            note.setTitle(input.getTitle());
            Note nt = this.noteService.updateNote(note);
            return NoteResponse.builder().note(
                    NoteType.builder()
                            .updatedAt(nt.getUpdatedAt().toString())
                            .createdAt(nt.getCreatedAt().toString())
                            .title(nt.getTitle())
                            .content(nt.getContent())
                            .id(nt.getId())
                            .build()
            ).build();
        }catch (Exception e){
            return  NoteResponse.builder()
                    .error(
                            Error.builder().message("failed to update the note for a specific reason.")
                                    .field("updateNote").build()
                    )
                    .build();
        }
    }
}
