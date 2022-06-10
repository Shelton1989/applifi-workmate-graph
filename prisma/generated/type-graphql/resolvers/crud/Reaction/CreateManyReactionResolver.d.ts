import { GraphQLResolveInfo } from "graphql";
import { CreateManyReactionArgs } from "./args/CreateManyReactionArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyReactionResolver {
    createManyReaction(ctx: any, info: GraphQLResolveInfo, args: CreateManyReactionArgs): Promise<AffectedRowsOutput>;
}
