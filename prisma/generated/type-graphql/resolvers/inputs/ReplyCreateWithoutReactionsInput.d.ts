import { CommentCreateNestedOneWithoutRepliesInput } from "../inputs/CommentCreateNestedOneWithoutRepliesInput";
import { UserCreateNestedOneWithoutRepliesInput } from "../inputs/UserCreateNestedOneWithoutRepliesInput";
export declare class ReplyCreateWithoutReactionsInput {
    id?: string | undefined;
    text: string;
    Comment: CommentCreateNestedOneWithoutRepliesInput;
    Author: UserCreateNestedOneWithoutRepliesInput;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
