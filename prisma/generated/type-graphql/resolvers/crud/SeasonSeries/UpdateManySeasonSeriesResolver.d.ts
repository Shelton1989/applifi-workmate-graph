import { GraphQLResolveInfo } from "graphql";
import { UpdateManySeasonSeriesArgs } from "./args/UpdateManySeasonSeriesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySeasonSeriesResolver {
    updateManySeasonSeries(ctx: any, info: GraphQLResolveInfo, args: UpdateManySeasonSeriesArgs): Promise<AffectedRowsOutput>;
}
