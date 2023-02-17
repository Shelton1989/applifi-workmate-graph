import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumPAYMENT_METHODWithAggregatesFilter } from "../inputs/EnumPAYMENT_METHODWithAggregatesFilter";
import { EnumPAYMENT_TYPEWithAggregatesFilter } from "../inputs/EnumPAYMENT_TYPEWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TransactionScalarWhereWithAggregatesInput {
    AND?: TransactionScalarWhereWithAggregatesInput[] | undefined;
    OR?: TransactionScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TransactionScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    bookingOrderId?: StringWithAggregatesFilter | undefined;
    amountInLowestDenomination?: IntWithAggregatesFilter | undefined;
    currencyId?: StringNullableWithAggregatesFilter | undefined;
    SelectedPaymentType?: StringNullableWithAggregatesFilter | undefined;
    stripePaymentReference?: StringNullableWithAggregatesFilter | undefined;
    paymentMethod?: EnumPAYMENT_METHODWithAggregatesFilter | undefined;
    paymentType?: EnumPAYMENT_TYPEWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
