import { GraphQLResolveInfo } from "graphql";
import { GroupByOrderLineItemArgs } from "./args/GroupByOrderLineItemArgs";
import { OrderLineItemGroupBy } from "../../outputs/OrderLineItemGroupBy";
export declare class GroupByOrderLineItemResolver {
    groupByOrderLineItem(ctx: any, info: GraphQLResolveInfo, args: GroupByOrderLineItemArgs): Promise<OrderLineItemGroupBy[]>;
}
