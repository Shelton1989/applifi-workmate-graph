import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumLIST_TYPEWithAggregatesFilter } from "../inputs/EnumLIST_TYPEWithAggregatesFilter";
import { IntNullableListFilter } from "../inputs/IntNullableListFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TopicListsScalarWhereWithAggregatesInput {
    AND?: TopicListsScalarWhereWithAggregatesInput[] | undefined;
    OR?: TopicListsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TopicListsScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    type?: EnumLIST_TYPEWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    lists?: IntNullableListFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
