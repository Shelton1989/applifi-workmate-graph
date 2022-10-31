import { GraphQLResolveInfo } from "graphql";
import { GroupBySeasonSeriesArgs } from "./args/GroupBySeasonSeriesArgs";
import { SeasonSeriesGroupBy } from "../../outputs/SeasonSeriesGroupBy";
export declare class GroupBySeasonSeriesResolver {
    groupBySeasonSeries(ctx: any, info: GraphQLResolveInfo, args: GroupBySeasonSeriesArgs): Promise<SeasonSeriesGroupBy[]>;
}
