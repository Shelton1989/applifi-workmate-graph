import { GraphQLResolveInfo } from "graphql";
import { CreateReplyArgs } from "./args/CreateReplyArgs";
import { Reply } from "../../../models/Reply";
export declare class CreateReplyResolver {
    createReply(ctx: any, info: GraphQLResolveInfo, args: CreateReplyArgs): Promise<Reply>;
}
