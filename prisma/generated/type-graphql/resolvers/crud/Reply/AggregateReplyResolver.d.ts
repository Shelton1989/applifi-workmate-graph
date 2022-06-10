import { GraphQLResolveInfo } from "graphql";
import { AggregateReplyArgs } from "./args/AggregateReplyArgs";
import { AggregateReply } from "../../outputs/AggregateReply";
export declare class AggregateReplyResolver {
    aggregateReply(ctx: any, info: GraphQLResolveInfo, args: AggregateReplyArgs): Promise<AggregateReply>;
}
