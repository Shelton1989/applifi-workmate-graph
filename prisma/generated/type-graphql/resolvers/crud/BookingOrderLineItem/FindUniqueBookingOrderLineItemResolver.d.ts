import { GraphQLResolveInfo } from "graphql";
import { FindUniqueBookingOrderLineItemArgs } from "./args/FindUniqueBookingOrderLineItemArgs";
import { BookingOrderLineItem } from "../../../models/BookingOrderLineItem";
export declare class FindUniqueBookingOrderLineItemResolver {
    bookingOrderLineItem(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBookingOrderLineItemArgs): Promise<BookingOrderLineItem | null>;
}
