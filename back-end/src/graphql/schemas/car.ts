import { gql } from "graphql-tag";

export const CarTypes = gql`
  input CarInput {
    name: String
    age: Int
  }

  type ReturnType {
    data: String
  }

  type Query {
    helloCar: String
    getHelloQuery: ReturnType
  }

  type Mutation {
    editCar(user: UserInput): String
    helloMutation: String
  }
`;
