import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumADDRESS_TYPEFilter } from "../inputs/EnumADDRESS_TYPEFilter";
import { OrderListRelationFilter } from "../inputs/OrderListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class AddressWhereInput {
    AND?: AddressWhereInput[] | undefined;
    OR?: AddressWhereInput[] | undefined;
    NOT?: AddressWhereInput[] | undefined;
    id?: StringFilter | undefined;
    type?: EnumADDRESS_TYPEFilter | undefined;
    line1?: StringFilter | undefined;
    line2?: StringFilter | undefined;
    city?: StringFilter | undefined;
    district?: StringFilter | undefined;
    country?: StringFilter | undefined;
    code?: StringFilter | undefined;
    isDefault?: BoolFilter | undefined;
    User?: UserRelationFilter | undefined;
    userId?: StringNullableFilter | undefined;
    Orders?: OrderListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
