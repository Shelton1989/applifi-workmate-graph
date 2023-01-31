import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class BookingOrderLineItemScalarWhereInput {
    AND?: BookingOrderLineItemScalarWhereInput[] | undefined;
    OR?: BookingOrderLineItemScalarWhereInput[] | undefined;
    NOT?: BookingOrderLineItemScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    details?: StringNullableFilter | undefined;
    comments?: StringNullableFilter | undefined;
    priceId?: StringFilter | undefined;
    bookingId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
