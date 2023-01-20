import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumEXPERIENCE_CATEGORYNullableFilter } from "../inputs/EnumEXPERIENCE_CATEGORYNullableFilter";
import { EnumPUBLISH_STATUSFilter } from "../inputs/EnumPUBLISH_STATUSFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class ExperienceScalarWhereInput {
    AND?: ExperienceScalarWhereInput[] | undefined;
    OR?: ExperienceScalarWhereInput[] | undefined;
    NOT?: ExperienceScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    tenantId?: StringFilter | undefined;
    productLink?: StringNullableFilter | undefined;
    stripeProductId?: StringNullableFilter | undefined;
    title?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    category?: EnumEXPERIENCE_CATEGORYNullableFilter | undefined;
    photo?: StringNullableFilter | undefined;
    gallery?: StringNullableListFilter | undefined;
    duration?: IntNullableFilter | undefined;
    publishStatus?: EnumPUBLISH_STATUSFilter | undefined;
    likedByIds?: StringNullableListFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
