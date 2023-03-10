import { GraphQLResolveInfo } from "graphql";
import { AggregateOrderLineItemArgs } from "./args/AggregateOrderLineItemArgs";
import { AggregateOrderLineItem } from "../../outputs/AggregateOrderLineItem";
export declare class AggregateOrderLineItemResolver {
    aggregateOrderLineItem(ctx: any, info: GraphQLResolveInfo, args: AggregateOrderLineItemArgs): Promise<AggregateOrderLineItem>;
}
