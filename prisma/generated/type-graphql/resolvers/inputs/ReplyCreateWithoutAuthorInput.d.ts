import { CommentCreateNestedOneWithoutRepliesInput } from "../inputs/CommentCreateNestedOneWithoutRepliesInput";
import { ReactionCreateNestedManyWithoutReplyInput } from "../inputs/ReactionCreateNestedManyWithoutReplyInput";
export declare class ReplyCreateWithoutAuthorInput {
    id?: string | undefined;
    text: string;
    Comment: CommentCreateNestedOneWithoutRepliesInput;
    Reactions?: ReactionCreateNestedManyWithoutReplyInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
