import { GraphQLResolveInfo } from "graphql";
import { FindUniqueBillingArgs } from "./args/FindUniqueBillingArgs";
import { Billing } from "../../../models/Billing";
export declare class FindUniqueBillingResolver {
    billing(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBillingArgs): Promise<Billing | null>;
}
