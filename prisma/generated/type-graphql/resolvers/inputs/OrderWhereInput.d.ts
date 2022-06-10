import { AddressRelationFilter } from "../inputs/AddressRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumORDER_STATUSFilter } from "../inputs/EnumORDER_STATUSFilter";
import { OrderLineItemListRelationFilter } from "../inputs/OrderLineItemListRelationFilter";
import { ShippingMethodRelationFilter } from "../inputs/ShippingMethodRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class OrderWhereInput {
    AND?: OrderWhereInput[] | undefined;
    OR?: OrderWhereInput[] | undefined;
    NOT?: OrderWhereInput[] | undefined;
    id?: StringFilter | undefined;
    status?: EnumORDER_STATUSFilter | undefined;
    SelectedShippingAddress?: AddressRelationFilter | undefined;
    selectedShippingAddressId?: StringNullableFilter | undefined;
    SelectedShippingMethod?: ShippingMethodRelationFilter | undefined;
    selectedShippingMethodId?: StringNullableFilter | undefined;
    SelectedPaymentType?: StringNullableFilter | undefined;
    stripePaymentReference?: StringNullableFilter | undefined;
    User?: UserRelationFilter | undefined;
    userId?: StringFilter | undefined;
    Items?: OrderLineItemListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
