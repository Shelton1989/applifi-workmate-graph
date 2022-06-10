import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumADDRESS_TYPEWithAggregatesFilter } from "../inputs/EnumADDRESS_TYPEWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class AddressScalarWhereWithAggregatesInput {
    AND?: AddressScalarWhereWithAggregatesInput[] | undefined;
    OR?: AddressScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AddressScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    type?: EnumADDRESS_TYPEWithAggregatesFilter | undefined;
    line1?: StringWithAggregatesFilter | undefined;
    line2?: StringWithAggregatesFilter | undefined;
    city?: StringWithAggregatesFilter | undefined;
    district?: StringWithAggregatesFilter | undefined;
    country?: StringWithAggregatesFilter | undefined;
    code?: StringWithAggregatesFilter | undefined;
    isDefault?: BoolWithAggregatesFilter | undefined;
    userId?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
