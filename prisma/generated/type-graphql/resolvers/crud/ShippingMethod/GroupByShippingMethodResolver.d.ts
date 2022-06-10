import { GraphQLResolveInfo } from "graphql";
import { GroupByShippingMethodArgs } from "./args/GroupByShippingMethodArgs";
import { ShippingMethodGroupBy } from "../../outputs/ShippingMethodGroupBy";
export declare class GroupByShippingMethodResolver {
    groupByShippingMethod(ctx: any, info: GraphQLResolveInfo, args: GroupByShippingMethodArgs): Promise<ShippingMethodGroupBy[]>;
}
