import { CommentCreateNestedOneWithoutReactionsInput } from "../inputs/CommentCreateNestedOneWithoutReactionsInput";
import { EpisodeCreateNestedOneWithoutReactionsInput } from "../inputs/EpisodeCreateNestedOneWithoutReactionsInput";
import { PostCreateNestedOneWithoutReactionsInput } from "../inputs/PostCreateNestedOneWithoutReactionsInput";
import { ReplyCreateNestedOneWithoutReactionsInput } from "../inputs/ReplyCreateNestedOneWithoutReactionsInput";
import { TopicCreateNestedOneWithoutReactionsInput } from "../inputs/TopicCreateNestedOneWithoutReactionsInput";
import { UserCreateNestedOneWithoutReactionsInput } from "../inputs/UserCreateNestedOneWithoutReactionsInput";
export declare class ReactionCreateWithoutSeasonSeriesInput {
    id?: string | undefined;
    type: "LIKE" | "LOVE" | "DISLIKE";
    Post?: PostCreateNestedOneWithoutReactionsInput | undefined;
    Comment?: CommentCreateNestedOneWithoutReactionsInput | undefined;
    Reply?: ReplyCreateNestedOneWithoutReactionsInput | undefined;
    Author: UserCreateNestedOneWithoutReactionsInput;
    Topic?: TopicCreateNestedOneWithoutReactionsInput | undefined;
    Episode?: EpisodeCreateNestedOneWithoutReactionsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
