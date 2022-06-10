import { GraphQLResolveInfo } from "graphql";
import { UpsertReplyArgs } from "./args/UpsertReplyArgs";
import { Reply } from "../../../models/Reply";
export declare class UpsertReplyResolver {
    upsertReply(ctx: any, info: GraphQLResolveInfo, args: UpsertReplyArgs): Promise<Reply>;
}
