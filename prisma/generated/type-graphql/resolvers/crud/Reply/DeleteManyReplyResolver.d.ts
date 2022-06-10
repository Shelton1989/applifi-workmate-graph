import { GraphQLResolveInfo } from "graphql";
import { DeleteManyReplyArgs } from "./args/DeleteManyReplyArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyReplyResolver {
    deleteManyReply(ctx: any, info: GraphQLResolveInfo, args: DeleteManyReplyArgs): Promise<AffectedRowsOutput>;
}
