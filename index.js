import { ApolloServer, gql } from "apollo-server";
const persons = [
  {
    name: "Youseff",
    phone: "044-123456",
    street: "Avenida Fullstack",
    city: "Mataro",
    id: '3d599470-3436-11e9-bc57-8b80ba54c431'
  },
  {
    name: "Itzi",
    street: "Pasaje Testing",
    city: "Ibiza",
    id: '3d599471-3436-11e9-bc57-8b80ba54c431'
  },
  {
    name: "Ed Sheeran",
    phone: "044-123456",
    street: "Desvio Antesala",
    city: "Carrioli",
    id: '3d599472-3436-11e9-bc57-8b80ba54c431'
  },
];

const typeDefinitions = gql`
  type Person {
    name: String!
    phone: Int
    street: String!
    city: String!
    id: String!
  }

  type Query {
    personCount: Int!
    allPersons: [Person]!
  }
`
const resolvers = {
    Query: {
        personCount: () => persons.length,
        allPersons: () => persons
    }
}

const server = new ApolloServer({
    typeDefs: typeDefinitions,
    resolvers
})

server.listen().then(({url}) => {
    console.log(`Sever ready at ${url}`)
})