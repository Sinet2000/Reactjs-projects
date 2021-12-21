import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
const port = 4000;

mongoose.connect('mongodb://localhost/flashcards_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (req, res) => {
  res.send('It works!');
});

server.start().then(res => {
  server.applyMiddleware({ app, path: '/' });
  app.listen({ port }, () => 
    console.log(`Gateway API running at port: ${port}`)
  );  
});