import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumADDRESS_TYPEWithAggregatesFilter } from "../inputs/EnumADDRESS_TYPEWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class LocationScalarWhereWithAggregatesInput {
    AND?: LocationScalarWhereWithAggregatesInput[] | undefined;
    OR?: LocationScalarWhereWithAggregatesInput[] | undefined;
    NOT?: LocationScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    longitude?: FloatWithAggregatesFilter | undefined;
    latitude?: FloatWithAggregatesFilter | undefined;
    googleMapsUrl?: StringWithAggregatesFilter | undefined;
    googlePlacesId?: StringWithAggregatesFilter | undefined;
    type?: EnumADDRESS_TYPEWithAggregatesFilter | undefined;
    line1?: StringWithAggregatesFilter | undefined;
    line2?: StringWithAggregatesFilter | undefined;
    city?: StringWithAggregatesFilter | undefined;
    district?: StringWithAggregatesFilter | undefined;
    country?: StringWithAggregatesFilter | undefined;
    code?: StringWithAggregatesFilter | undefined;
    isDefault?: BoolWithAggregatesFilter | undefined;
    experienceId?: StringNullableWithAggregatesFilter | undefined;
    tenantId?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
