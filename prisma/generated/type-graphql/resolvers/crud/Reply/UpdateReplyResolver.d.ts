import { GraphQLResolveInfo } from "graphql";
import { UpdateReplyArgs } from "./args/UpdateReplyArgs";
import { Reply } from "../../../models/Reply";
export declare class UpdateReplyResolver {
    updateReply(ctx: any, info: GraphQLResolveInfo, args: UpdateReplyArgs): Promise<Reply | null>;
}
