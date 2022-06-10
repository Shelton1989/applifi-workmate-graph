import { ReactionCreateNestedManyWithoutReplyInput } from "../inputs/ReactionCreateNestedManyWithoutReplyInput";
import { UserCreateNestedOneWithoutRepliesInput } from "../inputs/UserCreateNestedOneWithoutRepliesInput";
export declare class ReplyCreateWithoutCommentInput {
    id?: string | undefined;
    text: string;
    Author: UserCreateNestedOneWithoutRepliesInput;
    Reactions?: ReactionCreateNestedManyWithoutReplyInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
