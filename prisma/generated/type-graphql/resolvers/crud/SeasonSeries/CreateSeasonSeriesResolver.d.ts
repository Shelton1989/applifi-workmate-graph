import { GraphQLResolveInfo } from "graphql";
import { CreateSeasonSeriesArgs } from "./args/CreateSeasonSeriesArgs";
import { SeasonSeries } from "../../../models/SeasonSeries";
export declare class CreateSeasonSeriesResolver {
    createSeasonSeries(ctx: any, info: GraphQLResolveInfo, args: CreateSeasonSeriesArgs): Promise<SeasonSeries>;
}
