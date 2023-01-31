import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumADDRESS_TYPENullableFilter } from "../inputs/EnumADDRESS_TYPENullableFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class LocationScalarWhereInput {
    AND?: LocationScalarWhereInput[] | undefined;
    OR?: LocationScalarWhereInput[] | undefined;
    NOT?: LocationScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    longitude?: FloatNullableFilter | undefined;
    latitude?: FloatNullableFilter | undefined;
    googleMapsUrl?: StringNullableFilter | undefined;
    googlePlacesId?: StringNullableFilter | undefined;
    type?: EnumADDRESS_TYPENullableFilter | undefined;
    line1?: StringNullableFilter | undefined;
    line2?: StringNullableFilter | undefined;
    city?: StringNullableFilter | undefined;
    district?: StringNullableFilter | undefined;
    country?: StringNullableFilter | undefined;
    code?: StringNullableFilter | undefined;
    isDefault?: BoolFilter | undefined;
    experienceId?: StringNullableFilter | undefined;
    tenantId?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
