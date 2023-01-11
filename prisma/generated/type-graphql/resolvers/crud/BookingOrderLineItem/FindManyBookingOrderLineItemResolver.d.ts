import { GraphQLResolveInfo } from "graphql";
import { FindManyBookingOrderLineItemArgs } from "./args/FindManyBookingOrderLineItemArgs";
import { BookingOrderLineItem } from "../../../models/BookingOrderLineItem";
export declare class FindManyBookingOrderLineItemResolver {
    bookingOrderLineItems(ctx: any, info: GraphQLResolveInfo, args: FindManyBookingOrderLineItemArgs): Promise<BookingOrderLineItem[]>;
}
