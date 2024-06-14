import { gql } from "graphql-tag";

export const UserTypes = gql`
  input UserInput {
    name: String
    age: Int
  }

  type Query {
    helloUser: String
  }

  type Mutation {
    editUser(user: UserInput): String
  }
`;
