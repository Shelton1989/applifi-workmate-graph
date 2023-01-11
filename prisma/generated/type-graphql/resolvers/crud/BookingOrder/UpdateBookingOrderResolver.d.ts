import { GraphQLResolveInfo } from "graphql";
import { UpdateBookingOrderArgs } from "./args/UpdateBookingOrderArgs";
import { BookingOrder } from "../../../models/BookingOrder";
export declare class UpdateBookingOrderResolver {
    updateBookingOrder(ctx: any, info: GraphQLResolveInfo, args: UpdateBookingOrderArgs): Promise<BookingOrder | null>;
}
