import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter } from "../inputs/EnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter";
import { EnumPUBLISH_STATUSWithAggregatesFilter } from "../inputs/EnumPUBLISH_STATUSWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ExperienceScalarWhereWithAggregatesInput {
    AND?: ExperienceScalarWhereWithAggregatesInput[] | undefined;
    OR?: ExperienceScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ExperienceScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    tenantId?: StringWithAggregatesFilter | undefined;
    productLink?: StringNullableWithAggregatesFilter | undefined;
    stripeProductId?: StringNullableWithAggregatesFilter | undefined;
    title?: StringNullableWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    category?: EnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter | undefined;
    photo?: StringNullableWithAggregatesFilter | undefined;
    gallery?: StringNullableListFilter | undefined;
    duration?: IntNullableWithAggregatesFilter | undefined;
    publishStatus?: EnumPUBLISH_STATUSWithAggregatesFilter | undefined;
    likedByIds?: StringNullableListFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
