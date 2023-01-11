import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumEXPERIENCE_CATEGORYFilter } from "../inputs/EnumEXPERIENCE_CATEGORYFilter";
import { EnumPUBLISH_STATUSFilter } from "../inputs/EnumPUBLISH_STATUSFilter";
import { IntFilter } from "../inputs/IntFilter";
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
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    category?: EnumEXPERIENCE_CATEGORYFilter | undefined;
    photo?: StringNullableFilter | undefined;
    gallery?: StringNullableListFilter | undefined;
    location?: StringFilter | undefined;
    duration?: IntFilter | undefined;
    publishStatus?: EnumPUBLISH_STATUSFilter | undefined;
    likedByIds?: StringNullableListFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
