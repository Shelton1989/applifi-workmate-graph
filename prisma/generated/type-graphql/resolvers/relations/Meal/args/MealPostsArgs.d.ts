import { PostOrderByWithRelationInput } from "../../../inputs/PostOrderByWithRelationInput";
import { PostWhereInput } from "../../../inputs/PostWhereInput";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput";
export declare class MealPostsArgs {
    where?: PostWhereInput | undefined;
    orderBy?: PostOrderByWithRelationInput[] | undefined;
    cursor?: PostWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "type" | "caption" | "mediaUrl" | "rating" | "isCommentsEnabled" | "canBeCounted" | "authorId" | "mealId" | "postLink" | "createdAt" | "updatedAt"> | undefined;
}
