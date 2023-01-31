import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class BookingOrderLineItemScalarWhereInput {
    AND?: BookingOrderLineItemScalarWhereInput[] | undefined;
    OR?: BookingOrderLineItemScalarWhereInput[] | undefined;
    NOT?: BookingOrderLineItemScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    details?: StringNullableFilter | undefined;
    comments?: StringNullableFilter | undefined;
    selectedQuantity?: IntNullableFilter | undefined;
    selectedStartDate?: DateTimeNullableFilter | undefined;
    selectedEndDate?: DateTimeNullableFilter | undefined;
    priceId?: StringFilter | undefined;
    bookingId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
