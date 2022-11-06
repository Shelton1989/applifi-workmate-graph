import { GraphQLResolveInfo } from "graphql";
import { UpdateManyAggregateRatingArgs } from "./args/UpdateManyAggregateRatingArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyAggregateRatingResolver {
    updateManyAggregateRating(ctx: any, info: GraphQLResolveInfo, args: UpdateManyAggregateRatingArgs): Promise<AffectedRowsOutput>;
}
