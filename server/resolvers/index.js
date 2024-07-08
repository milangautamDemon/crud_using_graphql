import { mergeResolvers } from "@graphql-tools/merge";
import transactionResolver from "./transaction.resolver.js";
import userResolver from "./user.Resolver.js";

export const mergedResolvers = mergeResolvers([
  userResolver,
  transactionResolver,
]);
export default mergedResolvers;
