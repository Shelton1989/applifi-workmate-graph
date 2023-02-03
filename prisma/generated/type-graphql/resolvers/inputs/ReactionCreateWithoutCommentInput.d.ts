import { ExperienceCreateNestedOneWithoutReactionsInput } from "../inputs/ExperienceCreateNestedOneWithoutReactionsInput";
import { PostCreateNestedOneWithoutReactionsInput } from "../inputs/PostCreateNestedOneWithoutReactionsInput";
import { ReplyCreateNestedOneWithoutReactionsInput } from "../inputs/ReplyCreateNestedOneWithoutReactionsInput";
import { UserCreateNestedOneWithoutReactionsInput } from "../inputs/UserCreateNestedOneWithoutReactionsInput";
export declare class ReactionCreateWithoutCommentInput {
    id?: string | undefined;
    type: "LIKE" | "LOVE" | "DISLIKE";
    Experience?: ExperienceCreateNestedOneWithoutReactionsInput | undefined;
    Post?: PostCreateNestedOneWithoutReactionsInput | undefined;
    Reply?: ReplyCreateNestedOneWithoutReactionsInput | undefined;
    Author: UserCreateNestedOneWithoutReactionsInput;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
