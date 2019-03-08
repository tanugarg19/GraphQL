import React, {Component} from "react"
import {graphql} from "react-apollo"
import Classes from "./Books.css"
import {getBooksQuery} from "../../queries/queries"
import BookDetails from "../BookDetails/BookDetails"
class Books extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
            selectedId:""
        }
    }

    

    displayBooks(){
    let listJSX = null
    if(!this.props.data.loading){
        
        listJSX = this.props.data.books.map((book)=>{
            return(<li key={book.id} className={Classes.Books} 
                onClick={(e)=>this.setState({selectedId:book.id})}>{book.name}</li>)
        })
        return(listJSX)
    }
    else
        return(<div>Books Loading...</div>);

    }
    render(){
        return(
        <div id="book-list">
            {this.displayBooks()}
        <BookDetails selectedId={this.state.selectedId}></BookDetails>
        </div>
    );
    }

}

export default graphql(getBooksQuery)(Books)