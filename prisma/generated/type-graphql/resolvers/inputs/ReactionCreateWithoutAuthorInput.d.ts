import { CommentCreateNestedOneWithoutReactionsInput } from "../inputs/CommentCreateNestedOneWithoutReactionsInput";
import { EpisodeCreateNestedOneWithoutReactionsInput } from "../inputs/EpisodeCreateNestedOneWithoutReactionsInput";
import { PostCreateNestedOneWithoutReactionsInput } from "../inputs/PostCreateNestedOneWithoutReactionsInput";
import { ReplyCreateNestedOneWithoutReactionsInput } from "../inputs/ReplyCreateNestedOneWithoutReactionsInput";
import { SeasonSeriesCreateNestedOneWithoutReactionsInput } from "../inputs/SeasonSeriesCreateNestedOneWithoutReactionsInput";
import { TopicCreateNestedOneWithoutReactionsInput } from "../inputs/TopicCreateNestedOneWithoutReactionsInput";
export declare class ReactionCreateWithoutAuthorInput {
    id?: string | undefined;
    type: "LIKE" | "LOVE" | "DISLIKE";
    Post?: PostCreateNestedOneWithoutReactionsInput | undefined;
    Comment?: CommentCreateNestedOneWithoutReactionsInput | undefined;
    Reply?: ReplyCreateNestedOneWithoutReactionsInput | undefined;
    Topic?: TopicCreateNestedOneWithoutReactionsInput | undefined;
    SeasonSeries?: SeasonSeriesCreateNestedOneWithoutReactionsInput | undefined;
    Episode?: EpisodeCreateNestedOneWithoutReactionsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
