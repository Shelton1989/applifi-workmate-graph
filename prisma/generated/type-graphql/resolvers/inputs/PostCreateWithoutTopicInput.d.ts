import { CommentCreateNestedManyWithoutPostInput } from "../inputs/CommentCreateNestedManyWithoutPostInput";
import { EpisodeCreateNestedOneWithoutPostsInput } from "../inputs/EpisodeCreateNestedOneWithoutPostsInput";
import { PostCreatemediaUrlInput } from "../inputs/PostCreatemediaUrlInput";
import { ReactionCreateNestedManyWithoutPostInput } from "../inputs/ReactionCreateNestedManyWithoutPostInput";
import { SeasonSeriesCreateNestedOneWithoutPostsInput } from "../inputs/SeasonSeriesCreateNestedOneWithoutPostsInput";
import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";
export declare class PostCreateWithoutTopicInput {
    id?: string | undefined;
    type: "TOPIC" | "SEASON_SERIES" | "EPISODE";
    caption?: string | undefined;
    mediaUrl?: PostCreatemediaUrlInput | undefined;
    rating: number;
    isCommentsEnabled?: boolean | undefined;
    canBeCounted?: boolean | undefined;
    Author: UserCreateNestedOneWithoutPostsInput;
    Comments?: CommentCreateNestedManyWithoutPostInput | undefined;
    Reactions?: ReactionCreateNestedManyWithoutPostInput | undefined;
    SeasonSeries?: SeasonSeriesCreateNestedOneWithoutPostsInput | undefined;
    Episode?: EpisodeCreateNestedOneWithoutPostsInput | undefined;
    postLink?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
