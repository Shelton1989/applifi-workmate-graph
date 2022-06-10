import { GraphQLResolveInfo } from "graphql";
import { FindManyReplyArgs } from "./args/FindManyReplyArgs";
import { Reply } from "../../../models/Reply";
export declare class FindManyReplyResolver {
    replies(ctx: any, info: GraphQLResolveInfo, args: FindManyReplyArgs): Promise<Reply[]>;
}
