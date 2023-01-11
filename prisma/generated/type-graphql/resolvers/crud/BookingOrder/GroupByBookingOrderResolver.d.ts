import { GraphQLResolveInfo } from "graphql";
import { GroupByBookingOrderArgs } from "./args/GroupByBookingOrderArgs";
import { BookingOrderGroupBy } from "../../outputs/BookingOrderGroupBy";
export declare class GroupByBookingOrderResolver {
    groupByBookingOrder(ctx: any, info: GraphQLResolveInfo, args: GroupByBookingOrderArgs): Promise<BookingOrderGroupBy[]>;
}
