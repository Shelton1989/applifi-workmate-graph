import { AggregateRatingOrderByWithRelationInput } from "../inputs/AggregateRatingOrderByWithRelationInput";
import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
import { ReactionOrderByRelationAggregateInput } from "../inputs/ReactionOrderByRelationAggregateInput";
import { SeasonSeriesOrderByWithRelationInput } from "../inputs/SeasonSeriesOrderByWithRelationInput";
export declare class EpisodeOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    episodeNumber?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    year?: "asc" | "desc" | undefined;
    poster?: "asc" | "desc" | undefined;
    overview?: "asc" | "desc" | undefined;
    trailer?: "asc" | "desc" | undefined;
    coverImage?: "asc" | "desc" | undefined;
    tagline?: "asc" | "desc" | undefined;
    releaseDate?: "asc" | "desc" | undefined;
    SeasonSeries?: SeasonSeriesOrderByWithRelationInput | undefined;
    seasonSeriesId?: "asc" | "desc" | undefined;
    AggregateRating?: AggregateRatingOrderByWithRelationInput | undefined;
    aggregateRatingId?: "asc" | "desc" | undefined;
    Reactions?: ReactionOrderByRelationAggregateInput | undefined;
    Posts?: PostOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
