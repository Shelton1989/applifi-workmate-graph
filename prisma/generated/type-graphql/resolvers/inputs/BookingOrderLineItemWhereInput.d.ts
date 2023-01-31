import { BookingOrderRelationFilter } from "../inputs/BookingOrderRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { PriceRelationFilter } from "../inputs/PriceRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class BookingOrderLineItemWhereInput {
    AND?: BookingOrderLineItemWhereInput[] | undefined;
    OR?: BookingOrderLineItemWhereInput[] | undefined;
    NOT?: BookingOrderLineItemWhereInput[] | undefined;
    id?: StringFilter | undefined;
    details?: StringNullableFilter | undefined;
    comments?: StringNullableFilter | undefined;
    selectedQuantity?: IntNullableFilter | undefined;
    selectedStartDate?: DateTimeNullableFilter | undefined;
    selectedEndDate?: DateTimeNullableFilter | undefined;
    LineItemPrice?: PriceRelationFilter | undefined;
    priceId?: StringFilter | undefined;
    Booking?: BookingOrderRelationFilter | undefined;
    bookingId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
