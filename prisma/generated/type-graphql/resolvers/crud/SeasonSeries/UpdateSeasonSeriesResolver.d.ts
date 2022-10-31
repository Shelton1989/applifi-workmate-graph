import { GraphQLResolveInfo } from "graphql";
import { UpdateSeasonSeriesArgs } from "./args/UpdateSeasonSeriesArgs";
import { SeasonSeries } from "../../../models/SeasonSeries";
export declare class UpdateSeasonSeriesResolver {
    updateSeasonSeries(ctx: any, info: GraphQLResolveInfo, args: UpdateSeasonSeriesArgs): Promise<SeasonSeries | null>;
}
