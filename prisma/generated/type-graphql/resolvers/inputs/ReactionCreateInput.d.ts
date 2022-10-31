import { CommentCreateNestedOneWithoutReactionsInput } from "../inputs/CommentCreateNestedOneWithoutReactionsInput";
import { EpisodeCreateNestedOneWithoutReactionsInput } from "../inputs/EpisodeCreateNestedOneWithoutReactionsInput";
import { PostCreateNestedOneWithoutReactionsInput } from "../inputs/PostCreateNestedOneWithoutReactionsInput";
import { ReplyCreateNestedOneWithoutReactionsInput } from "../inputs/ReplyCreateNestedOneWithoutReactionsInput";
import { SeasonSeriesCreateNestedOneWithoutReactionsInput } from "../inputs/SeasonSeriesCreateNestedOneWithoutReactionsInput";
import { TopicCreateNestedOneWithoutReactionsInput } from "../inputs/TopicCreateNestedOneWithoutReactionsInput";
import { UserCreateNestedOneWithoutReactionsInput } from "../inputs/UserCreateNestedOneWithoutReactionsInput";
export declare class ReactionCreateInput {
    id?: string | undefined;
    type: "LIKE" | "LOVE" | "DISLIKE";
    Post?: PostCreateNestedOneWithoutReactionsInput | undefined;
    Comment?: CommentCreateNestedOneWithoutReactionsInput | undefined;
    Reply?: ReplyCreateNestedOneWithoutReactionsInput | undefined;
    Author: UserCreateNestedOneWithoutReactionsInput;
    Topic?: TopicCreateNestedOneWithoutReactionsInput | undefined;
    SeasonSeries?: SeasonSeriesCreateNestedOneWithoutReactionsInput | undefined;
    Episode?: EpisodeCreateNestedOneWithoutReactionsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
