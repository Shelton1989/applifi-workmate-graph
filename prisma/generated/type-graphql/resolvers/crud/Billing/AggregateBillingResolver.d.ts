import { GraphQLResolveInfo } from "graphql";
import { AggregateBillingArgs } from "./args/AggregateBillingArgs";
import { AggregateBilling } from "../../outputs/AggregateBilling";
export declare class AggregateBillingResolver {
    aggregateBilling(ctx: any, info: GraphQLResolveInfo, args: AggregateBillingArgs): Promise<AggregateBilling>;
}
