import { GraphQLResolveInfo } from "graphql";
import { GroupByBillingArgs } from "./args/GroupByBillingArgs";
import { BillingGroupBy } from "../../outputs/BillingGroupBy";
export declare class GroupByBillingResolver {
    groupByBilling(ctx: any, info: GraphQLResolveInfo, args: GroupByBillingArgs): Promise<BillingGroupBy[]>;
}
