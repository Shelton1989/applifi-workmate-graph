import { ReplyOrderByWithAggregationInput } from "../../../inputs/ReplyOrderByWithAggregationInput";
import { ReplyScalarWhereWithAggregatesInput } from "../../../inputs/ReplyScalarWhereWithAggregatesInput";
import { ReplyWhereInput } from "../../../inputs/ReplyWhereInput";
export declare class GroupByReplyArgs {
    where?: ReplyWhereInput | undefined;
    orderBy?: ReplyOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "text" | "commentId" | "authorId" | "createdAt" | "updatedAt">;
    having?: ReplyScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
