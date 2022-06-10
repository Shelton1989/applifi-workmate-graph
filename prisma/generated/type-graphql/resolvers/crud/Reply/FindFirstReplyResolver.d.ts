import { GraphQLResolveInfo } from "graphql";
import { FindFirstReplyArgs } from "./args/FindFirstReplyArgs";
import { Reply } from "../../../models/Reply";
export declare class FindFirstReplyResolver {
    findFirstReply(ctx: any, info: GraphQLResolveInfo, args: FindFirstReplyArgs): Promise<Reply | null>;
}
