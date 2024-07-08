import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./user.Resolver";
import transactionResolver from "./transaction.resolver";

export const mergedResolvers = mergeResolvers([
  userResolver,
  transactionResolver,
]);
export default mergedResolvers;
