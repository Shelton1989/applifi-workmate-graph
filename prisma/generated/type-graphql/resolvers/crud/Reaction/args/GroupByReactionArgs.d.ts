import { ReactionOrderByWithAggregationInput } from "../../../inputs/ReactionOrderByWithAggregationInput";
import { ReactionScalarWhereWithAggregatesInput } from "../../../inputs/ReactionScalarWhereWithAggregatesInput";
import { ReactionWhereInput } from "../../../inputs/ReactionWhereInput";
export declare class GroupByReactionArgs {
    where?: ReactionWhereInput | undefined;
    orderBy?: ReactionOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "type" | "postId" | "commentId" | "replyId" | "authorId" | "createdAt" | "updatedAt">;
    having?: ReactionScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
