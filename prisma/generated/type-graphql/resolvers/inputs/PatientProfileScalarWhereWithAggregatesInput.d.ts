import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumDIETARY_RESTRICTIONSNullableListFilter } from "../inputs/EnumDIETARY_RESTRICTIONSNullableListFilter";
import { EnumMEAL_KINDNullableListFilter } from "../inputs/EnumMEAL_KINDNullableListFilter";
import { EnumMEAL_TYPESNullableListFilter } from "../inputs/EnumMEAL_TYPESNullableListFilter";
import { EnumSPECIAL_DIETSNullableListFilter } from "../inputs/EnumSPECIAL_DIETSNullableListFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class PatientProfileScalarWhereWithAggregatesInput {
    AND?: PatientProfileScalarWhereWithAggregatesInput[] | undefined;
    OR?: PatientProfileScalarWhereWithAggregatesInput[] | undefined;
    NOT?: PatientProfileScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    identityNumber?: StringNullableWithAggregatesFilter | undefined;
    identityType?: StringNullableWithAggregatesFilter | undefined;
    bedNumber?: StringNullableWithAggregatesFilter | undefined;
    wardNumber?: StringNullableWithAggregatesFilter | undefined;
    allServicesOpen?: BoolNullableWithAggregatesFilter | undefined;
    dietaryRestrictions?: EnumDIETARY_RESTRICTIONSNullableListFilter | undefined;
    allowedMealTypes?: EnumMEAL_TYPESNullableListFilter | undefined;
    allowedMealKinds?: EnumMEAL_KINDNullableListFilter | undefined;
    doctorSpecificDiets?: EnumDIETARY_RESTRICTIONSNullableListFilter | undefined;
    specialDiets?: EnumSPECIAL_DIETSNullableListFilter | undefined;
    userId?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
