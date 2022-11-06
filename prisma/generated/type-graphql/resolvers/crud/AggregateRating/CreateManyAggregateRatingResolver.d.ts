import { GraphQLResolveInfo } from "graphql";
import { CreateManyAggregateRatingArgs } from "./args/CreateManyAggregateRatingArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyAggregateRatingResolver {
    createManyAggregateRating(ctx: any, info: GraphQLResolveInfo, args: CreateManyAggregateRatingArgs): Promise<AffectedRowsOutput>;
}
