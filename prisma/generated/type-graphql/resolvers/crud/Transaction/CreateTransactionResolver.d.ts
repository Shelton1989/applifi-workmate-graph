import { GraphQLResolveInfo } from "graphql";
import { CreateTransactionArgs } from "./args/CreateTransactionArgs";
import { Transaction } from "../../../models/Transaction";
export declare class CreateTransactionResolver {
    createTransaction(ctx: any, info: GraphQLResolveInfo, args: CreateTransactionArgs): Promise<Transaction>;
}
