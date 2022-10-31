import { GraphQLResolveInfo } from "graphql";
import { FindManySeasonSeriesArgs } from "./args/FindManySeasonSeriesArgs";
import { SeasonSeries } from "../../../models/SeasonSeries";
export declare class FindManySeasonSeriesResolver {
    findManySeasonSeries(ctx: any, info: GraphQLResolveInfo, args: FindManySeasonSeriesArgs): Promise<SeasonSeries[]>;
}
