import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumADDRESS_TYPEFilter } from "../inputs/EnumADDRESS_TYPEFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class LocationScalarWhereInput {
    AND?: LocationScalarWhereInput[] | undefined;
    OR?: LocationScalarWhereInput[] | undefined;
    NOT?: LocationScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    longitude?: FloatFilter | undefined;
    latitude?: FloatFilter | undefined;
    googleMapsUrl?: StringFilter | undefined;
    googlePlacesId?: StringFilter | undefined;
    type?: EnumADDRESS_TYPEFilter | undefined;
    line1?: StringFilter | undefined;
    line2?: StringFilter | undefined;
    city?: StringFilter | undefined;
    district?: StringFilter | undefined;
    country?: StringFilter | undefined;
    code?: StringFilter | undefined;
    isDefault?: BoolFilter | undefined;
    experienceId?: StringNullableFilter | undefined;
    tenantId?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
