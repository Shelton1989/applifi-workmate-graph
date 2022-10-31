import { GraphQLResolveInfo } from "graphql";
import { FindUniqueSeasonSeriesArgs } from "./args/FindUniqueSeasonSeriesArgs";
import { SeasonSeries } from "../../../models/SeasonSeries";
export declare class FindUniqueSeasonSeriesResolver {
    findUniqueSeasonSeries(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSeasonSeriesArgs): Promise<SeasonSeries | null>;
}
