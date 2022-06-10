import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumORDER_STATUSWithAggregatesFilter } from "../inputs/EnumORDER_STATUSWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class OrderScalarWhereWithAggregatesInput {
    AND?: OrderScalarWhereWithAggregatesInput[] | undefined;
    OR?: OrderScalarWhereWithAggregatesInput[] | undefined;
    NOT?: OrderScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    status?: EnumORDER_STATUSWithAggregatesFilter | undefined;
    selectedShippingAddressId?: StringNullableWithAggregatesFilter | undefined;
    selectedShippingMethodId?: StringNullableWithAggregatesFilter | undefined;
    SelectedPaymentType?: StringNullableWithAggregatesFilter | undefined;
    stripePaymentReference?: StringNullableWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
