import { GraphQLResolveInfo } from "graphql";
import { DeleteReplyArgs } from "./args/DeleteReplyArgs";
import { Reply } from "../../../models/Reply";
export declare class DeleteReplyResolver {
    deleteReply(ctx: any, info: GraphQLResolveInfo, args: DeleteReplyArgs): Promise<Reply | null>;
}
