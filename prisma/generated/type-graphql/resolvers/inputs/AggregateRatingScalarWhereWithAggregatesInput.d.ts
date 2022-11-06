import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class AggregateRatingScalarWhereWithAggregatesInput {
    AND?: AggregateRatingScalarWhereWithAggregatesInput[] | undefined;
    OR?: AggregateRatingScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AggregateRatingScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    ratingValue?: FloatWithAggregatesFilter | undefined;
    countedPosts?: IntNullableWithAggregatesFilter | undefined;
    allPosts?: IntNullableWithAggregatesFilter | undefined;
    ratingCount?: IntNullableWithAggregatesFilter | undefined;
    topicId?: StringNullableWithAggregatesFilter | undefined;
    seasonSeriesId?: StringNullableWithAggregatesFilter | undefined;
    episodeId?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
