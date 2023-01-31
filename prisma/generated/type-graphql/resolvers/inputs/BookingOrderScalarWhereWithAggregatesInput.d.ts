import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumBOOKING_ORDER_STATUSWithAggregatesFilter } from "../inputs/EnumBOOKING_ORDER_STATUSWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class BookingOrderScalarWhereWithAggregatesInput {
    AND?: BookingOrderScalarWhereWithAggregatesInput[] | undefined;
    OR?: BookingOrderScalarWhereWithAggregatesInput[] | undefined;
    NOT?: BookingOrderScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    experienceId?: StringWithAggregatesFilter | undefined;
    status?: EnumBOOKING_ORDER_STATUSWithAggregatesFilter | undefined;
    SelectedPaymentType?: StringNullableWithAggregatesFilter | undefined;
    stripePaymentReference?: StringNullableWithAggregatesFilter | undefined;
    buyerId?: StringWithAggregatesFilter | undefined;
    tenantId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
