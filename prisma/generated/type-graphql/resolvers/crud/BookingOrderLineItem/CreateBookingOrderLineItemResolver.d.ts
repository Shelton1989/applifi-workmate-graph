import { GraphQLResolveInfo } from "graphql";
import { CreateBookingOrderLineItemArgs } from "./args/CreateBookingOrderLineItemArgs";
import { BookingOrderLineItem } from "../../../models/BookingOrderLineItem";
export declare class CreateBookingOrderLineItemResolver {
    createBookingOrderLineItem(ctx: any, info: GraphQLResolveInfo, args: CreateBookingOrderLineItemArgs): Promise<BookingOrderLineItem>;
}
