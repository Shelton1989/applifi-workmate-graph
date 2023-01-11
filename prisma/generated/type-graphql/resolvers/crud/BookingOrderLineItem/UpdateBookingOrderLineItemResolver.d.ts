import { GraphQLResolveInfo } from "graphql";
import { UpdateBookingOrderLineItemArgs } from "./args/UpdateBookingOrderLineItemArgs";
import { BookingOrderLineItem } from "../../../models/BookingOrderLineItem";
export declare class UpdateBookingOrderLineItemResolver {
    updateBookingOrderLineItem(ctx: any, info: GraphQLResolveInfo, args: UpdateBookingOrderLineItemArgs): Promise<BookingOrderLineItem | null>;
}
