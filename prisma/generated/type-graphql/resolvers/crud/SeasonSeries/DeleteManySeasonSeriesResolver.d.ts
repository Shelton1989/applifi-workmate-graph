import { GraphQLResolveInfo } from "graphql";
import { DeleteManySeasonSeriesArgs } from "./args/DeleteManySeasonSeriesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySeasonSeriesResolver {
    deleteManySeasonSeries(ctx: any, info: GraphQLResolveInfo, args: DeleteManySeasonSeriesArgs): Promise<AffectedRowsOutput>;
}
