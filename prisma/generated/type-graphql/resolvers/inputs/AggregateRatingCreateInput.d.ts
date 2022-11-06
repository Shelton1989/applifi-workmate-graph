import { EpisodeCreateNestedOneWithoutAggregateRatingInput } from "../inputs/EpisodeCreateNestedOneWithoutAggregateRatingInput";
import { SeasonSeriesCreateNestedOneWithoutAggregateRatingInput } from "../inputs/SeasonSeriesCreateNestedOneWithoutAggregateRatingInput";
import { TopicCreateNestedOneWithoutAggregateRatingInput } from "../inputs/TopicCreateNestedOneWithoutAggregateRatingInput";
export declare class AggregateRatingCreateInput {
    id?: string | undefined;
    ratingValue: number;
    countedPosts?: number | undefined;
    allPosts?: number | undefined;
    ratingCount?: number | undefined;
    Topic?: TopicCreateNestedOneWithoutAggregateRatingInput | undefined;
    SeasonSeries?: SeasonSeriesCreateNestedOneWithoutAggregateRatingInput | undefined;
    Episode?: EpisodeCreateNestedOneWithoutAggregateRatingInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
