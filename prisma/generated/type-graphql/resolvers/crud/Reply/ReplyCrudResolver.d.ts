import { GraphQLResolveInfo } from "graphql";
import { AggregateReplyArgs } from "./args/AggregateReplyArgs";
import { CreateManyReplyArgs } from "./args/CreateManyReplyArgs";
import { CreateReplyArgs } from "./args/CreateReplyArgs";
import { DeleteManyReplyArgs } from "./args/DeleteManyReplyArgs";
import { DeleteReplyArgs } from "./args/DeleteReplyArgs";
import { FindFirstReplyArgs } from "./args/FindFirstReplyArgs";
import { FindManyReplyArgs } from "./args/FindManyReplyArgs";
import { FindUniqueReplyArgs } from "./args/FindUniqueReplyArgs";
import { GroupByReplyArgs } from "./args/GroupByReplyArgs";
import { UpdateManyReplyArgs } from "./args/UpdateManyReplyArgs";
import { UpdateReplyArgs } from "./args/UpdateReplyArgs";
import { UpsertReplyArgs } from "./args/UpsertReplyArgs";
import { Reply } from "../../../models/Reply";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateReply } from "../../outputs/AggregateReply";
import { ReplyGroupBy } from "../../outputs/ReplyGroupBy";
export declare class ReplyCrudResolver {
    reply(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReplyArgs): Promise<Reply | null>;
    findFirstReply(ctx: any, info: GraphQLResolveInfo, args: FindFirstReplyArgs): Promise<Reply | null>;
    replies(ctx: any, info: GraphQLResolveInfo, args: FindManyReplyArgs): Promise<Reply[]>;
    createReply(ctx: any, info: GraphQLResolveInfo, args: CreateReplyArgs): Promise<Reply>;
    createManyReply(ctx: any, info: GraphQLResolveInfo, args: CreateManyReplyArgs): Promise<AffectedRowsOutput>;
    deleteReply(ctx: any, info: GraphQLResolveInfo, args: DeleteReplyArgs): Promise<Reply | null>;
    updateReply(ctx: any, info: GraphQLResolveInfo, args: UpdateReplyArgs): Promise<Reply | null>;
    deleteManyReply(ctx: any, info: GraphQLResolveInfo, args: DeleteManyReplyArgs): Promise<AffectedRowsOutput>;
    updateManyReply(ctx: any, info: GraphQLResolveInfo, args: UpdateManyReplyArgs): Promise<AffectedRowsOutput>;
    upsertReply(ctx: any, info: GraphQLResolveInfo, args: UpsertReplyArgs): Promise<Reply>;
    aggregateReply(ctx: any, info: GraphQLResolveInfo, args: AggregateReplyArgs): Promise<AggregateReply>;
    groupByReply(ctx: any, info: GraphQLResolveInfo, args: GroupByReplyArgs): Promise<ReplyGroupBy[]>;
}
