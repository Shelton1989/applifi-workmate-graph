import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class BookingOrderLineItemScalarWhereInput {
    AND?: BookingOrderLineItemScalarWhereInput[] | undefined;
    OR?: BookingOrderLineItemScalarWhereInput[] | undefined;
    NOT?: BookingOrderLineItemScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    priceId?: StringFilter | undefined;
    bookingId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
