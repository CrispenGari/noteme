package com.example.graphql.resolvers.queries;

import graphql.kickstart.tools.GraphQLQueryResolver;
import org.springframework.stereotype.Component;

@Component
public class HelloQuery implements GraphQLQueryResolver {
    String hello(){
        return  "hello world";
    }
}
