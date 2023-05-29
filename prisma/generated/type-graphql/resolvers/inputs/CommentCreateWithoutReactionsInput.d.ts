import { DocumentCreateNestedOneWithoutCommentsInput } from "../inputs/DocumentCreateNestedOneWithoutCommentsInput";
import { ReplyCreateNestedManyWithoutCommentInput } from "../inputs/ReplyCreateNestedManyWithoutCommentInput";
import { UserCreateNestedOneWithoutCommentsInput } from "../inputs/UserCreateNestedOneWithoutCommentsInput";
export declare class CommentCreateWithoutReactionsInput {
    id?: string | undefined;
    text: string;
    Document: DocumentCreateNestedOneWithoutCommentsInput;
    Author: UserCreateNestedOneWithoutCommentsInput;
    Replies?: ReplyCreateNestedManyWithoutCommentInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
