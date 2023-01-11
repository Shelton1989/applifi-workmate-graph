import { GraphQLResolveInfo } from "graphql";
import { AggregateBookingOrderLineItemArgs } from "./args/AggregateBookingOrderLineItemArgs";
import { AggregateBookingOrderLineItem } from "../../outputs/AggregateBookingOrderLineItem";
export declare class AggregateBookingOrderLineItemResolver {
    aggregateBookingOrderLineItem(ctx: any, info: GraphQLResolveInfo, args: AggregateBookingOrderLineItemArgs): Promise<AggregateBookingOrderLineItem>;
}
