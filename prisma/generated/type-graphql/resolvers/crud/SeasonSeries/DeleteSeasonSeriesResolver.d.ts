import { GraphQLResolveInfo } from "graphql";
import { DeleteSeasonSeriesArgs } from "./args/DeleteSeasonSeriesArgs";
import { SeasonSeries } from "../../../models/SeasonSeries";
export declare class DeleteSeasonSeriesResolver {
    deleteSeasonSeries(ctx: any, info: GraphQLResolveInfo, args: DeleteSeasonSeriesArgs): Promise<SeasonSeries | null>;
}
