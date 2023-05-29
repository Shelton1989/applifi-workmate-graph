import { GraphQLResolveInfo } from "graphql";
import { FindManyBillingArgs } from "./args/FindManyBillingArgs";
import { Billing } from "../../../models/Billing";
export declare class FindManyBillingResolver {
    billings(ctx: any, info: GraphQLResolveInfo, args: FindManyBillingArgs): Promise<Billing[]>;
}
