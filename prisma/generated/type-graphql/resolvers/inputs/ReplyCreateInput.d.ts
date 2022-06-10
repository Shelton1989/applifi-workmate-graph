import { CommentCreateNestedOneWithoutRepliesInput } from "../inputs/CommentCreateNestedOneWithoutRepliesInput";
import { ReactionCreateNestedManyWithoutReplyInput } from "../inputs/ReactionCreateNestedManyWithoutReplyInput";
import { UserCreateNestedOneWithoutRepliesInput } from "../inputs/UserCreateNestedOneWithoutRepliesInput";
export declare class ReplyCreateInput {
    id?: string | undefined;
    text: string;
    Comment: CommentCreateNestedOneWithoutRepliesInput;
    Author: UserCreateNestedOneWithoutRepliesInput;
    Reactions?: ReactionCreateNestedManyWithoutReplyInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
