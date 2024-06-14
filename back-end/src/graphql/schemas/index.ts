import { mergeTypeDefs } from "@graphql-tools/merge";
import { UserTypes } from "./user";
import { CarTypes } from "./car";

export const typeDefs = mergeTypeDefs([UserTypes, CarTypes]);
