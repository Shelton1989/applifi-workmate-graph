import { EpisodeCreateNestedOneWithoutAggregateRatingInput } from "../inputs/EpisodeCreateNestedOneWithoutAggregateRatingInput";
import { TopicCreateNestedOneWithoutAggregateRatingInput } from "../inputs/TopicCreateNestedOneWithoutAggregateRatingInput";
export declare class AggregateRatingCreateWithoutSeasonSeriesInput {
    id?: string | undefined;
    ratingValue: number;
    countedPosts?: number | undefined;
    allPosts?: number | undefined;
    ratingCount?: number | undefined;
    Topic?: TopicCreateNestedOneWithoutAggregateRatingInput | undefined;
    Episode?: EpisodeCreateNestedOneWithoutAggregateRatingInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
