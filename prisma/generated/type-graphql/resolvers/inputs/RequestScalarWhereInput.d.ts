import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumREQUEST_STATUSFilter } from "../inputs/EnumREQUEST_STATUSFilter";
import { EnumREQUEST_TYPEFilter } from "../inputs/EnumREQUEST_TYPEFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class RequestScalarWhereInput {
    AND?: RequestScalarWhereInput[] | undefined;
    OR?: RequestScalarWhereInput[] | undefined;
    NOT?: RequestScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    reporterName?: StringNullableFilter | undefined;
    reporterEmail?: StringNullableFilter | undefined;
    subject?: StringNullableFilter | undefined;
    message?: StringNullableFilter | undefined;
    type?: EnumREQUEST_TYPEFilter | undefined;
    socialLinks?: StringNullableListFilter | undefined;
    entityId?: StringNullableFilter | undefined;
    requestResolution?: EnumREQUEST_STATUSFilter | undefined;
    userId?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
