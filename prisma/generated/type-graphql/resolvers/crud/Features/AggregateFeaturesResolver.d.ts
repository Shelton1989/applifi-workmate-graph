import { GraphQLResolveInfo } from "graphql";
import { AggregateFeaturesArgs } from "./args/AggregateFeaturesArgs";
import { AggregateFeatures } from "../../outputs/AggregateFeatures";
export declare class AggregateFeaturesResolver {
    aggregateFeatures(ctx: any, info: GraphQLResolveInfo, args: AggregateFeaturesArgs): Promise<AggregateFeatures>;
}
