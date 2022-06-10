import { GraphQLResolveInfo } from "graphql";
import { DeleteManyReactionArgs } from "./args/DeleteManyReactionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyReactionResolver {
    deleteManyReaction(ctx: any, info: GraphQLResolveInfo, args: DeleteManyReactionArgs): Promise<AffectedRowsOutput>;
}
