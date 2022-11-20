import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class EpisodeScalarWhereWithAggregatesInput {
    AND?: EpisodeScalarWhereWithAggregatesInput[] | undefined;
    OR?: EpisodeScalarWhereWithAggregatesInput[] | undefined;
    NOT?: EpisodeScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    episodeNumber?: IntWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    year?: StringWithAggregatesFilter | undefined;
    poster?: StringWithAggregatesFilter | undefined;
    overview?: StringWithAggregatesFilter | undefined;
    trailer?: StringWithAggregatesFilter | undefined;
    coverImage?: StringWithAggregatesFilter | undefined;
    tagline?: StringWithAggregatesFilter | undefined;
    releaseDate?: DateTimeWithAggregatesFilter | undefined;
    seasonSeriesId?: StringWithAggregatesFilter | undefined;
    aggregateRatingId?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
