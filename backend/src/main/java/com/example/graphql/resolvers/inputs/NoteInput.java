package com.example.graphql.resolvers.inputs;
import lombok.Data;
import java.io.Serializable;

@Data
public class NoteInput implements Serializable {
    private String ipAddress;
    private String content;
    private String title;
}
