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
    SeasonSeries?: SeasonSeriesOrderByWithRelationInput | undefined;
    Episode?: EpisodeOrderByWithRelationInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
