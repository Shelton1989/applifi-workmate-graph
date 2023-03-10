import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumADDRESS_TYPENullableWithAggregatesFilter } from "../inputs/EnumADDRESS_TYPENullableWithAggregatesFilter";
import { FloatNullableWithAggregatesFilter } from "../inputs/FloatNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class LocationScalarWhereWithAggregatesInput {
    AND?: LocationScalarWhereWithAggregatesInput[] | undefined;
    OR?: LocationScalarWhereWithAggregatesInput[] | undefined;
    NOT?: LocationScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    longitude?: FloatNullableWithAggregatesFilter | undefined;
    latitude?: FloatNullableWithAggregatesFilter | undefined;
    googleMapsUrl?: StringNullableWithAggregatesFilter | undefined;
    googlePlacesId?: StringNullableWithAggregatesFilter | undefined;
    type?: EnumADDRESS_TYPENullableWithAggregatesFilter | undefined;
    line1?: StringNullableWithAggregatesFilter | undefined;
    line2?: StringNullableWithAggregatesFilter | undefined;
    city?: StringNullableWithAggregatesFilter | undefined;
    district?: StringNullableWithAggregatesFilter | undefined;
    country?: StringNullableWithAggregatesFilter | undefined;
    code?: StringNullableWithAggregatesFilter | undefined;
    isDefault?: BoolWithAggregatesFilter | undefined;
    tenantId?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
