import { GraphQLResolveInfo } from "graphql";
import { CreateManySeasonSeriesArgs } from "./args/CreateManySeasonSeriesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySeasonSeriesResolver {
    createManySeasonSeries(ctx: any, info: GraphQLResolveInfo, args: CreateManySeasonSeriesArgs): Promise<AffectedRowsOutput>;
}
