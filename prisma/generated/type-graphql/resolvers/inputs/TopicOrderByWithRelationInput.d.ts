import { PostOrderByRelationAggregateInput } from "../inputs/PostOrderByRelationAggregateInput";
import { ReactionOrderByRelationAggregateInput } from "../inputs/ReactionOrderByRelationAggregateInput";
import { SeasonSeriesOrderByRelationAggregateInput } from "../inputs/SeasonSeriesOrderByRelationAggregateInput";
export declare class TopicOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    year?: "asc" | "desc" | undefined;
    poster?: "asc" | "desc" | undefined;
    overview?: "asc" | "desc" | undefined;
    trailer?: "asc" | "desc" | undefined;
    coverImage?: "asc" | "desc" | undefined;
    tagline?: "asc" | "desc" | undefined;
    genres?: "asc" | "desc" | undefined;
    creators?: "asc" | "desc" | undefined;
    authors?: "asc" | "desc" | undefined;
    artists?: "asc" | "desc" | undefined;
    producers?: "asc" | "desc" | undefined;
    directors?: "asc" | "desc" | undefined;
    publishers?: "asc" | "desc" | undefined;
    cast?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    Reactions?: ReactionOrderByRelationAggregateInput | undefined;
    SeasonSeries?: SeasonSeriesOrderByRelationAggregateInput | undefined;
    Posts?: PostOrderByRelationAggregateInput | undefined;
    topicType?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}