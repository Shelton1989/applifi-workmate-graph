import { GraphQLResolveInfo } from "graphql";
import { FindUniqueBookingOrderArgs } from "./args/FindUniqueBookingOrderArgs";
import { BookingOrder } from "../../../models/BookingOrder";
export declare class FindUniqueBookingOrderResolver {
    bookingOrder(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBookingOrderArgs): Promise<BookingOrder | null>;
}
