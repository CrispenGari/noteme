### Noteme

Noteme is an open source application that is running on native mobile devices that allow users to manage their notes. The users can do the following on the application:

1. Create Notes
2. Editing Notes
3. Deleting Notes
4. Reading Notes

### Project structure

The project is simple and straight forward. It is using a `multi-repo` approach with two repositories:

1. backend
2. mobile

```
📁 mobile
📁 backend
```

### mobile

Mobile is a react native application that is using `expo` sdk with typescript as a programming language.

### backend

Backend is a java-server (spring boot application) that is serving a graphql api that allows us to do `CRUD` operations in mysql database engine.
