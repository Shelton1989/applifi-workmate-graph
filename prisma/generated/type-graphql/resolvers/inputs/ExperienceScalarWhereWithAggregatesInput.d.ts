import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumEXPERIENCE_CATEGORYWithAggregatesFilter } from "../inputs/EnumEXPERIENCE_CATEGORYWithAggregatesFilter";
import { EnumPUBLISH_STATUSWithAggregatesFilter } from "../inputs/EnumPUBLISH_STATUSWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
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
    title?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    category?: EnumEXPERIENCE_CATEGORYWithAggregatesFilter | undefined;
    photo?: StringNullableWithAggregatesFilter | undefined;
    gallery?: StringNullableListFilter | undefined;
    location?: StringWithAggregatesFilter | undefined;
    duration?: IntWithAggregatesFilter | undefined;
    publishStatus?: EnumPUBLISH_STATUSWithAggregatesFilter | undefined;
    likedByIds?: StringNullableListFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
