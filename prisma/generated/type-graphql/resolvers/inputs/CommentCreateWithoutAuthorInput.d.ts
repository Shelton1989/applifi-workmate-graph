import { PostCreateNestedOneWithoutCommentsInput } from "../inputs/PostCreateNestedOneWithoutCommentsInput";
import { ReactionCreateNestedManyWithoutCommentInput } from "../inputs/ReactionCreateNestedManyWithoutCommentInput";
import { ReplyCreateNestedManyWithoutCommentInput } from "../inputs/ReplyCreateNestedManyWithoutCommentInput";
export declare class CommentCreateWithoutAuthorInput {
    id?: string | undefined;
    text: string;
    Post: PostCreateNestedOneWithoutCommentsInput;
    Replies?: ReplyCreateNestedManyWithoutCommentInput | undefined;
    Reactions?: ReactionCreateNestedManyWithoutCommentInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
