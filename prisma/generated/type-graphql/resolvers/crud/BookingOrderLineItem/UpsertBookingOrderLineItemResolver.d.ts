import { GraphQLResolveInfo } from "graphql";
import { UpsertBookingOrderLineItemArgs } from "./args/UpsertBookingOrderLineItemArgs";
import { BookingOrderLineItem } from "../../../models/BookingOrderLineItem";
export declare class UpsertBookingOrderLineItemResolver {
    upsertBookingOrderLineItem(ctx: any, info: GraphQLResolveInfo, args: UpsertBookingOrderLineItemArgs): Promise<BookingOrderLineItem>;
}
