import { GraphQLResolveInfo } from "graphql";
import { DeleteBookingOrderLineItemArgs } from "./args/DeleteBookingOrderLineItemArgs";
import { BookingOrderLineItem } from "../../../models/BookingOrderLineItem";
export declare class DeleteBookingOrderLineItemResolver {
    deleteBookingOrderLineItem(ctx: any, info: GraphQLResolveInfo, args: DeleteBookingOrderLineItemArgs): Promise<BookingOrderLineItem | null>;
}
