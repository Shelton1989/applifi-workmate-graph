import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumORDER_STATUSFilter } from "../inputs/EnumORDER_STATUSFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class OrderScalarWhereInput {
    AND?: OrderScalarWhereInput[] | undefined;
    OR?: OrderScalarWhereInput[] | undefined;
    NOT?: OrderScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    status?: EnumORDER_STATUSFilter | undefined;
    selectedShippingAddressId?: StringNullableFilter | undefined;
    selectedShippingMethodId?: StringNullableFilter | undefined;
    SelectedPaymentType?: StringNullableFilter | undefined;
    stripePaymentReference?: StringNullableFilter | undefined;
    userId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
