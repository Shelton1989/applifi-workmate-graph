import { GraphQLResolveInfo } from "graphql";
import { AggregatePriceArgs } from "./args/AggregatePriceArgs";
import { AggregatePrice } from "../../outputs/AggregatePrice";
export declare class AggregatePriceResolver {
    aggregatePrice(ctx: any, info: GraphQLResolveInfo, args: AggregatePriceArgs): Promise<AggregatePrice>;
}
