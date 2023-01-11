import { GraphQLResolveInfo } from "graphql";
import { CreateBookingOrderArgs } from "./args/CreateBookingOrderArgs";
import { BookingOrder } from "../../../models/BookingOrder";
export declare class CreateBookingOrderResolver {
    createBookingOrder(ctx: any, info: GraphQLResolveInfo, args: CreateBookingOrderArgs): Promise<BookingOrder>;
}
