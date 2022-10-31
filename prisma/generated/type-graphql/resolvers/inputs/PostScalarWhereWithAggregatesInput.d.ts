import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumMEDIA_TYPEWithAggregatesFilter } from "../inputs/EnumMEDIA_TYPEWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class PostScalarWhereWithAggregatesInput {
    AND?: PostScalarWhereWithAggregatesInput[] | undefined;
    OR?: PostScalarWhereWithAggregatesInput[] | undefined;
    NOT?: PostScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    type?: EnumMEDIA_TYPEWithAggregatesFilter | undefined;
    caption?: StringNullableWithAggregatesFilter | undefined;
    mediaUrl?: StringNullableListFilter | undefined;
    rating?: IntWithAggregatesFilter | undefined;
    isCommentsEnabled?: BoolWithAggregatesFilter | undefined;
    canBeCounted?: BoolWithAggregatesFilter | undefined;
    authorId?: StringWithAggregatesFilter | undefined;
    topicId?: StringNullableWithAggregatesFilter | undefined;
    seasonSeriesId?: StringNullableWithAggregatesFilter | undefined;
    episodeId?: StringNullableWithAggregatesFilter | undefined;
    postLink?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
