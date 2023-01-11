import { GraphQLResolveInfo } from "graphql";
import { FindFirstBookingOrderLineItemArgs } from "./args/FindFirstBookingOrderLineItemArgs";
import { BookingOrderLineItem } from "../../../models/BookingOrderLineItem";
export declare class FindFirstBookingOrderLineItemResolver {
    findFirstBookingOrderLineItem(ctx: any, info: GraphQLResolveInfo, args: FindFirstBookingOrderLineItemArgs): Promise<BookingOrderLineItem | null>;
}
