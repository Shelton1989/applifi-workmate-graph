import { DocumentCreateNestedOneWithoutCommentsInput } from "../inputs/DocumentCreateNestedOneWithoutCommentsInput";
import { ReactionCreateNestedManyWithoutCommentInput } from "../inputs/ReactionCreateNestedManyWithoutCommentInput";
import { ReplyCreateNestedManyWithoutCommentInput } from "../inputs/ReplyCreateNestedManyWithoutCommentInput";
import { UserCreateNestedOneWithoutCommentsInput } from "../inputs/UserCreateNestedOneWithoutCommentsInput";
export declare class CommentCreateInput {
    id?: string | undefined;
    text: string;
    Document: DocumentCreateNestedOneWithoutCommentsInput;
    Author: UserCreateNestedOneWithoutCommentsInput;
    Replies?: ReplyCreateNestedManyWithoutCommentInput | undefined;
    Reactions?: ReactionCreateNestedManyWithoutCommentInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
