import { ReactionOrderByWithRelationInput } from "../../../inputs/ReactionOrderByWithRelationInput";
import { ReactionWhereInput } from "../../../inputs/ReactionWhereInput";
import { ReactionWhereUniqueInput } from "../../../inputs/ReactionWhereUniqueInput";
export declare class FindFirstReactionArgs {
    where?: ReactionWhereInput | undefined;
    orderBy?: ReactionOrderByWithRelationInput[] | undefined;
    cursor?: ReactionWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "type" | "postId" | "commentId" | "replyId" | "authorId" | "createdAt" | "updatedAt"> | undefined;
}