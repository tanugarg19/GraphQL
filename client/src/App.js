import React, { Component } from 'react';
import Book from "./components/Books/Books"
import ApolloClient from "apollo-boost"
import {ApolloProvider} from "react-apollo"
import Addbook from "./components/AddBook/AddBook"

import './App.css';


const client = new ApolloClient({
  uri:"http://localhost:4000/graphql"

})
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Book></Book>
          <Addbook></Addbook>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
