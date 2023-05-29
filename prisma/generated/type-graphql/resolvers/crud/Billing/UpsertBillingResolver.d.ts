import { GraphQLResolveInfo } from "graphql";
import { UpsertBillingArgs } from "./args/UpsertBillingArgs";
import { Billing } from "../../../models/Billing";
export declare class UpsertBillingResolver {
    upsertBilling(ctx: any, info: GraphQLResolveInfo, args: UpsertBillingArgs): Promise<Billing>;
}
