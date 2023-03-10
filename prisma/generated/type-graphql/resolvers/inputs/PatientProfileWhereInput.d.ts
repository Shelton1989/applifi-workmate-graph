import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumDIETARY_RESTRICTIONSNullableListFilter } from "../inputs/EnumDIETARY_RESTRICTIONSNullableListFilter";
import { EnumMEAL_KINDNullableListFilter } from "../inputs/EnumMEAL_KINDNullableListFilter";
import { EnumMEAL_TYPESNullableListFilter } from "../inputs/EnumMEAL_TYPESNullableListFilter";
import { EnumSPECIAL_DIETSNullableListFilter } from "../inputs/EnumSPECIAL_DIETSNullableListFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class PatientProfileWhereInput {
    AND?: PatientProfileWhereInput[] | undefined;
    OR?: PatientProfileWhereInput[] | undefined;
    NOT?: PatientProfileWhereInput[] | undefined;
    id?: StringFilter | undefined;
    identityNumber?: StringNullableFilter | undefined;
    identityType?: StringNullableFilter | undefined;
    bedNumber?: StringNullableFilter | undefined;
    wardNumber?: StringNullableFilter | undefined;
    dietaryRestrictions?: EnumDIETARY_RESTRICTIONSNullableListFilter | undefined;
    allowedMealTypes?: EnumMEAL_TYPESNullableListFilter | undefined;
    allowedMealKinds?: EnumMEAL_KINDNullableListFilter | undefined;
    doctorSpecificDiets?: EnumDIETARY_RESTRICTIONSNullableListFilter | undefined;
    specialDiets?: EnumSPECIAL_DIETSNullableListFilter | undefined;
    User?: UserRelationFilter | undefined;
    userId?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
