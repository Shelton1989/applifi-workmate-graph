import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class BookingOrderLineItemScalarWhereWithAggregatesInput {
    AND?: BookingOrderLineItemScalarWhereWithAggregatesInput[] | undefined;
    OR?: BookingOrderLineItemScalarWhereWithAggregatesInput[] | undefined;
    NOT?: BookingOrderLineItemScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    priceId?: StringWithAggregatesFilter | undefined;
    bookingId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
