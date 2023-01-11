import { BookingOrderRelationFilter } from "../inputs/BookingOrderRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PriceRelationFilter } from "../inputs/PriceRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class BookingOrderLineItemWhereInput {
    AND?: BookingOrderLineItemWhereInput[] | undefined;
    OR?: BookingOrderLineItemWhereInput[] | undefined;
    NOT?: BookingOrderLineItemWhereInput[] | undefined;
    id?: StringFilter | undefined;
    LineItemPrice?: PriceRelationFilter | undefined;
    priceId?: StringFilter | undefined;
    Booking?: BookingOrderRelationFilter | undefined;
    bookingId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
