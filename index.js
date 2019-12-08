const { ApolloServer , gql } = require('apollo-server');
const typeDefs = require('./typeDefs')(gql);
const resolvers  = require('./resolvers');

const server  = new ApolloServer({
     typeDefs,
     resolvers
})


server.listen()
                .then(({ url } ) => {
                      console.log(`Executando em ${url}`)
                })