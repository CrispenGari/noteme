package com.example.graphql.resolvers.inputs;

import lombok.Data;
import java.io.Serializable;

@Data
public class UpdateNoteInput implements Serializable {
    private Long id;
    private String content;
    private String title;
}
