import { GraphQLResolveInfo } from "graphql";
import { GroupByBookingOrderLineItemArgs } from "./args/GroupByBookingOrderLineItemArgs";
import { BookingOrderLineItemGroupBy } from "../../outputs/BookingOrderLineItemGroupBy";
export declare class GroupByBookingOrderLineItemResolver {
    groupByBookingOrderLineItem(ctx: any, info: GraphQLResolveInfo, args: GroupByBookingOrderLineItemArgs): Promise<BookingOrderLineItemGroupBy[]>;
}
