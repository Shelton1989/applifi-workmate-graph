import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumTOPIC_TYPEWithAggregatesFilter } from "../inputs/EnumTOPIC_TYPEWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TopicScalarWhereWithAggregatesInput {
    AND?: TopicScalarWhereWithAggregatesInput[] | undefined;
    OR?: TopicScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TopicScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    year?: StringWithAggregatesFilter | undefined;
    poster?: StringWithAggregatesFilter | undefined;
    overview?: StringWithAggregatesFilter | undefined;
    trailer?: StringWithAggregatesFilter | undefined;
    coverImage?: StringWithAggregatesFilter | undefined;
    tagline?: StringWithAggregatesFilter | undefined;
    genres?: StringNullableListFilter | undefined;
    creators?: StringNullableListFilter | undefined;
    authors?: StringNullableListFilter | undefined;
    artists?: StringNullableListFilter | undefined;
    producers?: StringNullableListFilter | undefined;
    directors?: StringNullableListFilter | undefined;
    publishers?: StringNullableListFilter | undefined;
    cast?: StringNullableListFilter | undefined;
    type?: StringWithAggregatesFilter | undefined;
    topicType?: EnumTOPIC_TYPEWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}