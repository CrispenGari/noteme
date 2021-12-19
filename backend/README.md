### Backend
Backend serves a basic graphql api with spring-boot and mysql database to perform some basic `CRUD` operations
on a simple `1-to-N` relationship.


### Models
1. `IpAddress`
This model stores ip addresses of a given device to store the notes.

2. `Note`

This model stores a basic note, with two major fields `title` and `content`

### Relationship Between models

An `IpAddress` has a `1` to `Many` relationship with `Note`. This means that 1 ip address can have more than
1 note.


### Consuming the API

### IP Address

1. Creating an IP Address

To create an ip address one will run the following graphql mutation:
```
mutation CreateIpAddress($input: IpAddressInput!) {
    createIpAddress(input: $input){
        error{
            message
            field
        }
        ipAddress{
             createdAt
             updatedAt
            ipAddress
            id
            notes{
                id
                title
            }
        }
    }
}
```
With the following graphql variables:

```json
{
    "input":{
        "ipAddress": "198.0.0.6"
    }
}
```
2. Finding an Ip Address
To find an ipAddress we run the following query:

```
query FindIpAddress($input: IpAddressInput!){
    findIpAddress(input: $input){
    error{
            message
            field
        }
        ipAddress{
             createdAt
             updatedAt
            ipAddress
            id
            notes{
                id
                content
            }

        }
    }
}
```
With the following query variables:
```json
{
    "input":{
        "ipAddress": "198.0.0.6"
    }
}
```

3. Deleting an IP address
To delete an ip address we run the following mutation:

```
mutation DeleteIpAddress($input: IpAddressInput!){
    deleteIpAddress(input: $input)
}
```
With the following query variables:

```json
{
    "input":{
        "ipAddress": "198.0.0.6"
    }
}
```

### Notes
1. Creating a note
To create a new note we run the following mutation:
```

mutation CreateNote($input: NoteInput!){
    createNote(input:$input){
        note{
            createdAt
                updatedAt
                title
                id
                content
        }
        error{
            field
            message
        }
    }
}
```

with the following query variables:

```json
{
    "input":{
        "ipAddress": "198.0.0.6",
        "title": "hello world3",
        "content": "my hello world 3"
    }
}
```

2. Finding a note

To find a note we find it by id by running the following query:

```

query FindNote($input: GetNoteInput!){
    findNote(input:$input){
        note{
            createdAt
                updatedAt
                title
                id
                content
        }
        error{
            field
            message
        }

    }
}
```

With the following query variables:
```json
{
    "input":{
        "id": 2
    }
}
```
3. Deleting a note
To delete a note we run the following mutation:

```
mutation DeleteNote($input: GetNoteInput!){
    deleteNote(input:$input)
}
```

With the following query variables:

```json
{
    "input":{
        "id": 2
    }
}
```
3. Updating a note
To update a note we run the following mutation:

```
mutation UpdateNote($input: UpdateNoteInput!){
    updateNote(input:$input){
        note{
            createdAt
                updatedAt
                title
                id
                content
        }
        error{
            field
            message
        }

    }
}
```
With the following query variable:

```json
{
    "input":{
        "id": 2,
        "title": "note1",
        "content": "this note1"
    }
}
```