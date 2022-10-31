import { CommentCreateNestedOneWithoutReactionsInput } from "../inputs/CommentCreateNestedOneWithoutReactionsInput";
import { EpisodeCreateNestedOneWithoutReactionsInput } from "../inputs/EpisodeCreateNestedOneWithoutReactionsInput";
import { ReplyCreateNestedOneWithoutReactionsInput } from "../inputs/ReplyCreateNestedOneWithoutReactionsInput";
import { SeasonSeriesCreateNestedOneWithoutReactionsInput } from "../inputs/SeasonSeriesCreateNestedOneWithoutReactionsInput";
import { TopicCreateNestedOneWithoutReactionsInput } from "../inputs/TopicCreateNestedOneWithoutReactionsInput";
import { UserCreateNestedOneWithoutReactionsInput } from "../inputs/UserCreateNestedOneWithoutReactionsInput";
export declare class ReactionCreateWithoutPostInput {
    id?: string | undefined;
    type: "LIKE" | "LOVE" | "DISLIKE";
    Comment?: CommentCreateNestedOneWithoutReactionsInput | undefined;
    Reply?: ReplyCreateNestedOneWithoutReactionsInput | undefined;
    Author: UserCreateNestedOneWithoutReactionsInput;
    Topic?: TopicCreateNestedOneWithoutReactionsInput | undefined;
    SeasonSeries?: SeasonSeriesCreateNestedOneWithoutReactionsInput | undefined;
    Episode?: EpisodeCreateNestedOneWithoutReactionsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
