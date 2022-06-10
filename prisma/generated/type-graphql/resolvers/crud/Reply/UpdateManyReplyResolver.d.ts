import { GraphQLResolveInfo } from "graphql";
import { UpdateManyReplyArgs } from "./args/UpdateManyReplyArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyReplyResolver {
    updateManyReply(ctx: any, info: GraphQLResolveInfo, args: UpdateManyReplyArgs): Promise<AffectedRowsOutput>;
}
