import { CommentCreateNestedOneWithoutReactionsInput } from "../inputs/CommentCreateNestedOneWithoutReactionsInput";
import { UserCreateNestedOneWithoutReactionsInput } from "../inputs/UserCreateNestedOneWithoutReactionsInput";
export declare class ReactionCreateWithoutReplyInput {
    id?: string | undefined;
    type: "LIKE" | "LOVE" | "DISLIKE";
    Comment?: CommentCreateNestedOneWithoutReactionsInput | undefined;
    Author: UserCreateNestedOneWithoutReactionsInput;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
