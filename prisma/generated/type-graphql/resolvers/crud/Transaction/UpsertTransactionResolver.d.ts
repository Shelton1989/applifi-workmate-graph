import { GraphQLResolveInfo } from "graphql";
import { UpsertTransactionArgs } from "./args/UpsertTransactionArgs";
import { Transaction } from "../../../models/Transaction";
export declare class UpsertTransactionResolver {
    upsertTransaction(ctx: any, info: GraphQLResolveInfo, args: UpsertTransactionArgs): Promise<Transaction>;
}
