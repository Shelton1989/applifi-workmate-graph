import { BookingOrderRelationFilter } from "../inputs/BookingOrderRelationFilter";
import { CurrencyRelationFilter } from "../inputs/CurrencyRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumPAYMENT_METHODFilter } from "../inputs/EnumPAYMENT_METHODFilter";
import { EnumPAYMENT_TYPEFilter } from "../inputs/EnumPAYMENT_TYPEFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class TransactionWhereInput {
    AND?: TransactionWhereInput[] | undefined;
    OR?: TransactionWhereInput[] | undefined;
    NOT?: TransactionWhereInput[] | undefined;
    id?: StringFilter | undefined;
    BookingOrder?: BookingOrderRelationFilter | undefined;
    bookingOrderId?: StringFilter | undefined;
    amountInLowestDenomination?: IntFilter | undefined;
    currency?: CurrencyRelationFilter | undefined;
    currencyId?: StringNullableFilter | undefined;
    SelectedPaymentType?: StringNullableFilter | undefined;
    stripePaymentReference?: StringNullableFilter | undefined;
    paymentMethod?: EnumPAYMENT_METHODFilter | undefined;
    paymentType?: EnumPAYMENT_TYPEFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
