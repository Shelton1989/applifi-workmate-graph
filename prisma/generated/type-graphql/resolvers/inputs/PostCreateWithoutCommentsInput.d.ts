import { EpisodeCreateNestedOneWithoutPostsInput } from "../inputs/EpisodeCreateNestedOneWithoutPostsInput";
import { PostCreatemediaUrlInput } from "../inputs/PostCreatemediaUrlInput";
import { ReactionCreateNestedManyWithoutPostInput } from "../inputs/ReactionCreateNestedManyWithoutPostInput";
import { SeasonSeriesCreateNestedOneWithoutPostsInput } from "../inputs/SeasonSeriesCreateNestedOneWithoutPostsInput";
import { TopicCreateNestedOneWithoutPostsInput } from "../inputs/TopicCreateNestedOneWithoutPostsInput";
import { UserCreateNestedOneWithoutPostsInput } from "../inputs/UserCreateNestedOneWithoutPostsInput";
export declare class PostCreateWithoutCommentsInput {
    id?: string | undefined;
    type: "TOPIC" | "SEASON_SERIES" | "EPISODE";
    caption?: string | undefined;
    mediaUrl?: PostCreatemediaUrlInput | undefined;
    rating: number;
    isCommentsEnabled?: boolean | undefined;
    canBeCounted?: boolean | undefined;
    Author: UserCreateNestedOneWithoutPostsInput;
    Reactions?: ReactionCreateNestedManyWithoutPostInput | undefined;
    Topic?: TopicCreateNestedOneWithoutPostsInput | undefined;
    SeasonSeries?: SeasonSeriesCreateNestedOneWithoutPostsInput | undefined;
    Episode?: EpisodeCreateNestedOneWithoutPostsInput | undefined;
    postLink?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
