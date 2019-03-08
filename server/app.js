const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()

app.use(cors())
//mongoose.connect("mongodb+srv://Test:ready2go@cluster0-qaote.mongodb.net/test?retryWrites=true")
mongoose.connect("mongodb://localhost/testGraphQL")
mongoose.connection.once("open",()=>{
    console.log("Mongooes connection done")
}).on("error",(error)=>{
    console.log("Connection Error" + error)
})
app.use("/graphql",graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(4000,()=>{
    console.log("Listening req on port 4000")
})