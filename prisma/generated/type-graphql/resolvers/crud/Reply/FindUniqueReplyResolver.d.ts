import { GraphQLResolveInfo } from "graphql";
import { FindUniqueReplyArgs } from "./args/FindUniqueReplyArgs";
import { Reply } from "../../../models/Reply";
export declare class FindUniqueReplyResolver {
    reply(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReplyArgs): Promise<Reply | null>;
}
