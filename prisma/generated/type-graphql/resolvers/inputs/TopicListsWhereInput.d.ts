import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumLIST_TYPEFilter } from "../inputs/EnumLIST_TYPEFilter";
import { IntNullableListFilter } from "../inputs/IntNullableListFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class TopicListsWhereInput {
    AND?: TopicListsWhereInput[] | undefined;
    OR?: TopicListsWhereInput[] | undefined;
    NOT?: TopicListsWhereInput[] | undefined;
    id?: StringFilter | undefined;
    type?: EnumLIST_TYPEFilter | undefined;
    title?: StringFilter | undefined;
    lists?: IntNullableListFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
