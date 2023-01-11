import { GraphQLResolveInfo } from "graphql";
import { FindFirstBookingOrderArgs } from "./args/FindFirstBookingOrderArgs";
import { BookingOrder } from "../../../models/BookingOrder";
export declare class FindFirstBookingOrderResolver {
    findFirstBookingOrder(ctx: any, info: GraphQLResolveInfo, args: FindFirstBookingOrderArgs): Promise<BookingOrder | null>;
}
