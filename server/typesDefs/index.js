import { mergeTypeDefs } from "@graphql-tools/merge";
import userTypeDefs from "./user.typeDef.js";
import transactionTypeDefs from "./transaction.typeDef.js";

export const mergedTypeDefs = mergeTypeDefs([
  userTypeDefs,
  transactionTypeDefs,
]);

export default mergedTypeDefs;
