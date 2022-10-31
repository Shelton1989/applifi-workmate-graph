import { GraphQLResolveInfo } from "graphql";
import { AggregateSeasonSeriesArgs } from "./args/AggregateSeasonSeriesArgs";
import { AggregateSeasonSeries } from "../../outputs/AggregateSeasonSeries";
export declare class AggregateSeasonSeriesResolver {
    aggregateSeasonSeries(ctx: any, info: GraphQLResolveInfo, args: AggregateSeasonSeriesArgs): Promise<AggregateSeasonSeries>;
}
