import { GraphQLResolveInfo } from "graphql";
import { FindFirstSeasonSeriesArgs } from "./args/FindFirstSeasonSeriesArgs";
import { SeasonSeries } from "../../../models/SeasonSeries";
export declare class FindFirstSeasonSeriesResolver {
    findFirstSeasonSeries(ctx: any, info: GraphQLResolveInfo, args: FindFirstSeasonSeriesArgs): Promise<SeasonSeries | null>;
}
