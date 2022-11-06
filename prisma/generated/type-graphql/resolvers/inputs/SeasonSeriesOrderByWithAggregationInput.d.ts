import { SeasonSeriesAvgOrderByAggregateInput } from "../inputs/SeasonSeriesAvgOrderByAggregateInput";
import { SeasonSeriesCountOrderByAggregateInput } from "../inputs/SeasonSeriesCountOrderByAggregateInput";
import { SeasonSeriesMaxOrderByAggregateInput } from "../inputs/SeasonSeriesMaxOrderByAggregateInput";
import { SeasonSeriesMinOrderByAggregateInput } from "../inputs/SeasonSeriesMinOrderByAggregateInput";
import { SeasonSeriesSumOrderByAggregateInput } from "../inputs/SeasonSeriesSumOrderByAggregateInput";
export declare class SeasonSeriesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    seasonOrSeriesNumber?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    year?: "asc" | "desc" | undefined;
    poster?: "asc" | "desc" | undefined;
    overview?: "asc" | "desc" | undefined;
    trailer?: "asc" | "desc" | undefined;
    coverImage?: "asc" | "desc" | undefined;
    tagline?: "asc" | "desc" | undefined;
    releaseDate?: "asc" | "desc" | undefined;
    topicId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: SeasonSeriesCountOrderByAggregateInput | undefined;
    _avg?: SeasonSeriesAvgOrderByAggregateInput | undefined;
    _max?: SeasonSeriesMaxOrderByAggregateInput | undefined;
    _min?: SeasonSeriesMinOrderByAggregateInput | undefined;
    _sum?: SeasonSeriesSumOrderByAggregateInput | undefined;
}
