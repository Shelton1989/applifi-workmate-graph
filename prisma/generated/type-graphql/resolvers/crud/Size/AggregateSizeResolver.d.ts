import { GraphQLResolveInfo } from "graphql";
import { AggregateSizeArgs } from "./args/AggregateSizeArgs";
import { AggregateSize } from "../../outputs/AggregateSize";
export declare class AggregateSizeResolver {
    aggregateSize(ctx: any, info: GraphQLResolveInfo, args: AggregateSizeArgs): Promise<AggregateSize>;
}
