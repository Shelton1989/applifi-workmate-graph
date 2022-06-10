import { GraphQLResolveInfo } from "graphql";
import { GroupByReplyArgs } from "./args/GroupByReplyArgs";
import { ReplyGroupBy } from "../../outputs/ReplyGroupBy";
export declare class GroupByReplyResolver {
    groupByReply(ctx: any, info: GraphQLResolveInfo, args: GroupByReplyArgs): Promise<ReplyGroupBy[]>;
}
