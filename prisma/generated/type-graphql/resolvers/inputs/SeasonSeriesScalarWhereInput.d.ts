import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class SeasonSeriesScalarWhereInput {
    AND?: SeasonSeriesScalarWhereInput[] | undefined;
    OR?: SeasonSeriesScalarWhereInput[] | undefined;
    NOT?: SeasonSeriesScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    seasonOrSeriesNumber?: IntFilter | undefined;
    title?: StringFilter | undefined;
    year?: StringFilter | undefined;
    poster?: StringFilter | undefined;
    overview?: StringFilter | undefined;
    trailer?: StringFilter | undefined;
    coverImage?: StringFilter | undefined;
    tagline?: StringFilter | undefined;
    releaseDate?: DateTimeFilter | undefined;
    topicId?: StringFilter | undefined;
    aggregateRatingId?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
