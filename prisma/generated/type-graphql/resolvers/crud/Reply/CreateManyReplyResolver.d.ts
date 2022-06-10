import { GraphQLResolveInfo } from "graphql";
import { CreateManyReplyArgs } from "./args/CreateManyReplyArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyReplyResolver {
    createManyReply(ctx: any, info: GraphQLResolveInfo, args: CreateManyReplyArgs): Promise<AffectedRowsOutput>;
}
