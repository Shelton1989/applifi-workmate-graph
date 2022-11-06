import { TopicCountOrderByAggregateInput } from "../inputs/TopicCountOrderByAggregateInput";
import { TopicMaxOrderByAggregateInput } from "../inputs/TopicMaxOrderByAggregateInput";
import { TopicMinOrderByAggregateInput } from "../inputs/TopicMinOrderByAggregateInput";
export declare class TopicOrderByWithAggregationInput {
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
    releaseDate?: "asc" | "desc" | undefined;
    topicType?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: TopicCountOrderByAggregateInput | undefined;
    _max?: TopicMaxOrderByAggregateInput | undefined;
    _min?: TopicMinOrderByAggregateInput | undefined;
}
