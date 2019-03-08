import React,{Component} from "react"
import {graphql} from "react-apollo"
import {getBookQuery} from "../../queries/queries"

class BookDetails extends Component{
    render(){
        console.log(this.props);
       
        return(
            <div>
                {/* <p>Name:{this.props.data.book.name}</p>
                <p>Genre:{this.props.data.book.author}</p>
                <p>Name:{this.props.data.book.author.books}</p> */}

            </div>
        )
    }
}

export default graphql(getBookQuery,{
    options:(props)=>{ 
    //    console.log(props)   
        return{
            variables:{
                id:props.selectedId
            }
        }
    }
})(BookDetails)
