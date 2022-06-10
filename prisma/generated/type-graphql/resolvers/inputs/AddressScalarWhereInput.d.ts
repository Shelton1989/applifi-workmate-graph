import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumADDRESS_TYPEFilter } from "../inputs/EnumADDRESS_TYPEFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class AddressScalarWhereInput {
    AND?: AddressScalarWhereInput[] | undefined;
    OR?: AddressScalarWhereInput[] | undefined;
    NOT?: AddressScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    type?: EnumADDRESS_TYPEFilter | undefined;
    line1?: StringFilter | undefined;
    line2?: StringFilter | undefined;
    city?: StringFilter | undefined;
    district?: StringFilter | undefined;
    country?: StringFilter | undefined;
    code?: StringFilter | undefined;
    isDefault?: BoolFilter | undefined;
    userId?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
