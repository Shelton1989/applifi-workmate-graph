import { EpisodeAvgOrderByAggregateInput } from "../inputs/EpisodeAvgOrderByAggregateInput";
import { EpisodeCountOrderByAggregateInput } from "../inputs/EpisodeCountOrderByAggregateInput";
import { EpisodeMaxOrderByAggregateInput } from "../inputs/EpisodeMaxOrderByAggregateInput";
import { EpisodeMinOrderByAggregateInput } from "../inputs/EpisodeMinOrderByAggregateInput";
import { EpisodeSumOrderByAggregateInput } from "../inputs/EpisodeSumOrderByAggregateInput";
export declare class EpisodeOrderByWithAggregationInput {
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
    seasonSeriesId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: EpisodeCountOrderByAggregateInput | undefined;
    _avg?: EpisodeAvgOrderByAggregateInput | undefined;
    _max?: EpisodeMaxOrderByAggregateInput | undefined;
    _min?: EpisodeMinOrderByAggregateInput | undefined;
    _sum?: EpisodeSumOrderByAggregateInput | undefined;
}
