package com.example.graphql.resolvers.inputs;

import lombok.Data;
import java.io.Serializable;

@Data
public class GetNoteInput implements Serializable {
    private Long id;
}
