import { UserInput } from "../../../generated/index";

export const helloMutation = async (_, { name, password }: UserInput) => {
  return "hello mutation";
};
