import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class SeasonSeriesScalarWhereWithAggregatesInput {
    AND?: SeasonSeriesScalarWhereWithAggregatesInput[] | undefined;
    OR?: SeasonSeriesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SeasonSeriesScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    seasonOrSeriesNumber?: IntWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    year?: StringWithAggregatesFilter | undefined;
    poster?: StringWithAggregatesFilter | undefined;
    overview?: StringWithAggregatesFilter | undefined;
    trailer?: StringWithAggregatesFilter | undefined;
    coverImage?: StringWithAggregatesFilter | undefined;
    tagline?: StringWithAggregatesFilter | undefined;
    releaseDate?: DateTimeWithAggregatesFilter | undefined;
    topicId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
