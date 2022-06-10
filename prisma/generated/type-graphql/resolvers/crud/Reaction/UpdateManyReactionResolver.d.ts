import { GraphQLResolveInfo } from "graphql";
import { UpdateManyReactionArgs } from "./args/UpdateManyReactionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyReactionResolver {
    updateManyReaction(ctx: any, info: GraphQLResolveInfo, args: UpdateManyReactionArgs): Promise<AffectedRowsOutput>;
}
