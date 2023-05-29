import { DocumentCreateNestedOneWithoutCommentsInput } from "../inputs/DocumentCreateNestedOneWithoutCommentsInput";
import { ReactionCreateNestedManyWithoutCommentInput } from "../inputs/ReactionCreateNestedManyWithoutCommentInput";
import { ReplyCreateNestedManyWithoutCommentInput } from "../inputs/ReplyCreateNestedManyWithoutCommentInput";
export declare class CommentCreateWithoutAuthorInput {
    id?: string | undefined;
    text: string;
    Document: DocumentCreateNestedOneWithoutCommentsInput;
    Replies?: ReplyCreateNestedManyWithoutCommentInput | undefined;
    Reactions?: ReactionCreateNestedManyWithoutCommentInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
