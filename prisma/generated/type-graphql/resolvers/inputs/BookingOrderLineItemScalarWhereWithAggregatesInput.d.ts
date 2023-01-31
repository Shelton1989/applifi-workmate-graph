import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class BookingOrderLineItemScalarWhereWithAggregatesInput {
    AND?: BookingOrderLineItemScalarWhereWithAggregatesInput[] | undefined;
    OR?: BookingOrderLineItemScalarWhereWithAggregatesInput[] | undefined;
    NOT?: BookingOrderLineItemScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    details?: StringNullableWithAggregatesFilter | undefined;
    comments?: StringNullableWithAggregatesFilter | undefined;
    selectedQuantity?: IntNullableWithAggregatesFilter | undefined;
    selectedStartDate?: DateTimeNullableWithAggregatesFilter | undefined;
    selectedEndDate?: DateTimeNullableWithAggregatesFilter | undefined;
    priceId?: StringWithAggregatesFilter | undefined;
    bookingId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
