import { GraphQLResolveInfo } from "graphql";
import { UpsertBookingOrderArgs } from "./args/UpsertBookingOrderArgs";
import { BookingOrder } from "../../../models/BookingOrder";
export declare class UpsertBookingOrderResolver {
    upsertBookingOrder(ctx: any, info: GraphQLResolveInfo, args: UpsertBookingOrderArgs): Promise<BookingOrder>;
}
