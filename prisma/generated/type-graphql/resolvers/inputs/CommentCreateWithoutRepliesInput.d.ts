import { DocumentCreateNestedOneWithoutCommentsInput } from "../inputs/DocumentCreateNestedOneWithoutCommentsInput";
import { ReactionCreateNestedManyWithoutCommentInput } from "../inputs/ReactionCreateNestedManyWithoutCommentInput";
import { UserCreateNestedOneWithoutCommentsInput } from "../inputs/UserCreateNestedOneWithoutCommentsInput";
export declare class CommentCreateWithoutRepliesInput {
    id?: string | undefined;
    text: string;
    Document: DocumentCreateNestedOneWithoutCommentsInput;
    Author: UserCreateNestedOneWithoutCommentsInput;
    Reactions?: ReactionCreateNestedManyWithoutCommentInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
