import React,{Component} from "react"
import {graphql,compose} from "react-apollo"
import {getAuthorQuery,addBookMutation, getBooksQuery} from "../../queries/queries"


class AddBook extends Component {

    constructor(props){
        super(props)
        this.state = {
            name:"",
            genre:"",
            authorId:""
        }
    }
    formSubmit(e){
        e.preventDefault();
        this.props.addBook({
            variables:{
                name:this.state.name,
                genre:this.state.genre,
                authid:this.state.authorId
            },
            refetchQueries:[{
                query:getBooksQuery
            }]

        })
       // alert("Form submitted")
    }
    displayAuthors()
    {
        let authorOptionsJSX = null
        if(!this.props.getAuthor.loading){
            authorOptionsJSX = this.props.getAuthor.authors.map((author,i)=>{
                return(<option key={i} value={author.id}>{author.name}</option>)
            })
        }
        else{
            authorOptionsJSX = <option disabled>Loading...</option>
        }
        return authorOptionsJSX
    }
    render(){
        return(
        <form id="add-book" onSubmit={this.formSubmit.bind(this)}>
            <div>
                <label>Book Name:</label>
                <input type="text" id="book" onChange={(e)=>this.setState({name:e.target.value})}></input>
            </div>
            <div>
                <label>Genre:</label>
                <input type="text" id="genre" onChange={(e)=>this.setState({genre:e.target.value})}></input>
            </div>
            <div>
                <label>Author:</label>
                <select onChange={(e)=>this.setState({authorId:e.target.value})}>
                <option>Select Author</option>
                    {this.displayAuthors()}
                </select>
            </div>
            <button type="submit">+</button>

        </form>
        )
    }
}

export default compose(
    graphql(getAuthorQuery,{name:"getAuthor"}),
    graphql(addBookMutation,{name:"addBook"})
)(AddBook)