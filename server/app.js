const express = require('express');
//const graphqlHTTP = require('express-graphql');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const cors = require('cors');

const app = express();
app.use(cors());

const mongoose = require('mongoose');
//const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://graphql-user:test123@cluster0.qxopl.mongodb.net/graph-ql?retryWrites=true&w=majority";
mongoose.connect(uri);
mongoose.connection.once('open',()=>{
    console.log("connected successfully");
})
//const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//client.connect(err => {
  //const collection = client.db("graph-ql").collection("books");
  
  // perform actions on the collection object
  //client.close();
//});


// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});