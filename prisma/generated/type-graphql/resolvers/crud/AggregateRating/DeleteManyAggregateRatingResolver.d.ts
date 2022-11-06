import { GraphQLResolveInfo } from "graphql";
import { DeleteManyAggregateRatingArgs } from "./args/DeleteManyAggregateRatingArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyAggregateRatingResolver {
    deleteManyAggregateRating(ctx: any, info: GraphQLResolveInfo, args: DeleteManyAggregateRatingArgs): Promise<AffectedRowsOutput>;
}
