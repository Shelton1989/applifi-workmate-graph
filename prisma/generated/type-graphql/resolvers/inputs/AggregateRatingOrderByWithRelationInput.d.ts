import { EpisodeOrderByWithRelationInput } from "../inputs/EpisodeOrderByWithRelationInput";
import { SeasonSeriesOrderByWithRelationInput } from "../inputs/SeasonSeriesOrderByWithRelationInput";
import { TopicOrderByWithRelationInput } from "../inputs/TopicOrderByWithRelationInput";
export declare class AggregateRatingOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    ratingValue?: "asc" | "desc" | undefined;
    countedPosts?: "asc" | "desc" | undefined;
    allPosts?: "asc" | "desc" | undefined;
    ratingCount?: "asc" | "desc" | undefined;
    Topic?: TopicOrderByWithRelationInput | undefined;
    topicId?: "asc" | "desc" | undefined;
    SeasonSeries?: SeasonSeriesOrderByWithRelationInput | undefined;
    seasonSeriesId?: "asc" | "desc" | undefined;
    Episode?: EpisodeOrderByWithRelationInput | undefined;
    episodeId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
