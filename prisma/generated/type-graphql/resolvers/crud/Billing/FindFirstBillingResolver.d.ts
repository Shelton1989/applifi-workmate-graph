import { GraphQLResolveInfo } from "graphql";
import { FindFirstBillingArgs } from "./args/FindFirstBillingArgs";
import { Billing } from "../../../models/Billing";
export declare class FindFirstBillingResolver {
    findFirstBilling(ctx: any, info: GraphQLResolveInfo, args: FindFirstBillingArgs): Promise<Billing | null>;
}
