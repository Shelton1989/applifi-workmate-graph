import { GraphQLResolveInfo } from "graphql";
import { UpdateTransactionArgs } from "./args/UpdateTransactionArgs";
import { Transaction } from "../../../models/Transaction";
export declare class UpdateTransactionResolver {
    updateTransaction(ctx: any, info: GraphQLResolveInfo, args: UpdateTransactionArgs): Promise<Transaction | null>;
}
