import { PostOrderByWithAggregationInput } from "../../../inputs/PostOrderByWithAggregationInput";
import { PostScalarWhereWithAggregatesInput } from "../../../inputs/PostScalarWhereWithAggregatesInput";
import { PostWhereInput } from "../../../inputs/PostWhereInput";
export declare class GroupByPostArgs {
    where?: PostWhereInput | undefined;
    orderBy?: PostOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "type" | "caption" | "mediaUrl" | "isCommentsEnabled" | "authorId" | "productLink" | "createdAt" | "updatedAt">;
    having?: PostScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
