import { GraphQLResolveInfo } from "graphql";
import { AggregateBookingOrderArgs } from "./args/AggregateBookingOrderArgs";
import { AggregateBookingOrder } from "../../outputs/AggregateBookingOrder";
export declare class AggregateBookingOrderResolver {
    aggregateBookingOrder(ctx: any, info: GraphQLResolveInfo, args: AggregateBookingOrderArgs): Promise<AggregateBookingOrder>;
}
