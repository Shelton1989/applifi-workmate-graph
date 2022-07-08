import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumREQUEST_STATUSWithAggregatesFilter } from "../inputs/EnumREQUEST_STATUSWithAggregatesFilter";
import { EnumREQUEST_TYPEWithAggregatesFilter } from "../inputs/EnumREQUEST_TYPEWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class RequestScalarWhereWithAggregatesInput {
    AND?: RequestScalarWhereWithAggregatesInput[] | undefined;
    OR?: RequestScalarWhereWithAggregatesInput[] | undefined;
    NOT?: RequestScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    subject?: StringNullableWithAggregatesFilter | undefined;
    message?: StringNullableWithAggregatesFilter | undefined;
    type?: EnumREQUEST_TYPEWithAggregatesFilter | undefined;
    socialLinks?: StringNullableListFilter | undefined;
    entityId?: StringNullableWithAggregatesFilter | undefined;
    requestResolution?: EnumREQUEST_STATUSWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
