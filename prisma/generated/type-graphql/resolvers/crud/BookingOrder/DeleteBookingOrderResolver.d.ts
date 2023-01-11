import { GraphQLResolveInfo } from "graphql";
import { DeleteBookingOrderArgs } from "./args/DeleteBookingOrderArgs";
import { BookingOrder } from "../../../models/BookingOrder";
export declare class DeleteBookingOrderResolver {
    deleteBookingOrder(ctx: any, info: GraphQLResolveInfo, args: DeleteBookingOrderArgs): Promise<BookingOrder | null>;
}
