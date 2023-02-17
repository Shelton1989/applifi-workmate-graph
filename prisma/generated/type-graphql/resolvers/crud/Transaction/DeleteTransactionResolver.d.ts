import { GraphQLResolveInfo } from "graphql";
import { DeleteTransactionArgs } from "./args/DeleteTransactionArgs";
import { Transaction } from "../../../models/Transaction";
export declare class DeleteTransactionResolver {
    deleteTransaction(ctx: any, info: GraphQLResolveInfo, args: DeleteTransactionArgs): Promise<Transaction | null>;
}
