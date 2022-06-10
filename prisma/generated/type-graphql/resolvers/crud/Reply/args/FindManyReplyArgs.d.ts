import { ReplyOrderByWithRelationInput } from "../../../inputs/ReplyOrderByWithRelationInput";
import { ReplyWhereInput } from "../../../inputs/ReplyWhereInput";
import { ReplyWhereUniqueInput } from "../../../inputs/ReplyWhereUniqueInput";
export declare class FindManyReplyArgs {
    where?: ReplyWhereInput | undefined;
    orderBy?: ReplyOrderByWithRelationInput[] | undefined;
    cursor?: ReplyWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "text" | "commentId" | "authorId" | "createdAt" | "updatedAt"> | undefined;
}
