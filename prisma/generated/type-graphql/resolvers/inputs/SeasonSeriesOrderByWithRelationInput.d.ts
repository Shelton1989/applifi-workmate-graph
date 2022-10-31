import { EpisodeOrderByRelationAggregateInput } from "../inputs/EpisodeOrderByRelationAggregateInput";
import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
import { ReactionOrderByRelationAggregateInput } from "../inputs/ReactionOrderByRelationAggregateInput";
import { TopicOrderByWithRelationInput } from "../inputs/TopicOrderByWithRelationInput";
export declare class SeasonSeriesOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    seasonOrSeriesNumber?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    year?: "asc" | "desc" | undefined;
    poster?: "asc" | "desc" | undefined;
    overview?: "asc" | "desc" | undefined;
    trailer?: "asc" | "desc" | undefined;
    coverImage?: "asc" | "desc" | undefined;
    tagline?: "asc" | "desc" | undefined;
    Topic?: TopicOrderByWithRelationInput | undefined;
    topicId?: "asc" | "desc" | undefined;
    Reactions?: ReactionOrderByRelationAggregateInput | undefined;
    Episodes?: EpisodeOrderByRelationAggregateInput | undefined;
    Posts?: PostOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
