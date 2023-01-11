import { GraphQLResolveInfo } from "graphql";
import { FindManyBookingOrderArgs } from "./args/FindManyBookingOrderArgs";
import { BookingOrder } from "../../../models/BookingOrder";
export declare class FindManyBookingOrderResolver {
    bookingOrders(ctx: any, info: GraphQLResolveInfo, args: FindManyBookingOrderArgs): Promise<BookingOrder[]>;
}
