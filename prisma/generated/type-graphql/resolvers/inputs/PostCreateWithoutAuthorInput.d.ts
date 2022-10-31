import { CommentCreateNestedManyWithoutPostInput } from "../inputs/CommentCreateNestedManyWithoutPostInput";
import { EpisodeCreateNestedOneWithoutPostsInput } from "../inputs/EpisodeCreateNestedOneWithoutPostsInput";
import { PostCreatemediaUrlInput } from "../inputs/PostCreatemediaUrlInput";
import { ReactionCreateNestedManyWithoutPostInput } from "../inputs/ReactionCreateNestedManyWithoutPostInput";
import { SeasonSeriesCreateNestedOneWithoutPostsInput } from "../inputs/SeasonSeriesCreateNestedOneWithoutPostsInput";
import { TopicCreateNestedOneWithoutPostsInput } from "../inputs/TopicCreateNestedOneWithoutPostsInput";
export declare class PostCreateWithoutAuthorInput {
    id?: string | undefined;
    type: "TOPIC" | "SEASON_SERIES" | "EPISODE";
    caption?: string | undefined;
    mediaUrl?: PostCreatemediaUrlInput | undefined;
    rating: number;
    isCommentsEnabled?: boolean | undefined;
    canBeCounted?: boolean | undefined;
    Comments?: CommentCreateNestedManyWithoutPostInput | undefined;
    Reactions?: ReactionCreateNestedManyWithoutPostInput | undefined;
    Topic?: TopicCreateNestedOneWithoutPostsInput | undefined;
    SeasonSeries?: SeasonSeriesCreateNestedOneWithoutPostsInput | undefined;
    Episode?: EpisodeCreateNestedOneWithoutPostsInput | undefined;
    postLink?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
