import { GraphQLResolveInfo } from "graphql";
import { UpsertSeasonSeriesArgs } from "./args/UpsertSeasonSeriesArgs";
import { SeasonSeries } from "../../../models/SeasonSeries";
export declare class UpsertSeasonSeriesResolver {
    upsertSeasonSeries(ctx: any, info: GraphQLResolveInfo, args: UpsertSeasonSeriesArgs): Promise<SeasonSeries>;
}
