import {gql} from "apollo-boost"

const getBooksQuery = gql`
{
    books{
        name
        genre
        id
    }
}
`

const getAuthorQuery = gql`
{
    authors{
        name
        id  
     }
}
`

const addBookMutation = gql`
mutation($name:String!,$genre:String!,$authid:ID!){
    addBook(name:$name,genre:$genre,authid:$authid){
        name
        id
    }
}
`

const getBookQuery = gql`
query($id:ID){
    book(id:$id){
        id
        name
        genre
        author{
            name  
            id          
            age
            books{
                name   
                             
            }
        }
    }
}
`
export {getAuthorQuery,getBooksQuery,addBookMutation,getBookQuery}