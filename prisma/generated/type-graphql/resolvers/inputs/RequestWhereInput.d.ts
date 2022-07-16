import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumREQUEST_STATUSFilter } from "../inputs/EnumREQUEST_STATUSFilter";
import { EnumREQUEST_TYPEFilter } from "../inputs/EnumREQUEST_TYPEFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class RequestWhereInput {
    AND?: RequestWhereInput[] | undefined;
    OR?: RequestWhereInput[] | undefined;
    NOT?: RequestWhereInput[] | undefined;
    id?: StringFilter | undefined;
    reporterName?: StringNullableFilter | undefined;
    reporterEmail?: StringNullableFilter | undefined;
    subject?: StringNullableFilter | undefined;
    message?: StringNullableFilter | undefined;
    type?: EnumREQUEST_TYPEFilter | undefined;
    socialLinks?: StringNullableListFilter | undefined;
    entityId?: StringNullableFilter | undefined;
    requestResolution?: EnumREQUEST_STATUSFilter | undefined;
    Reporter?: UserRelationFilter | undefined;
    userId?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
