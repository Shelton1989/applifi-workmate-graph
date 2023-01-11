import { BookingOrder } from "../../../models/BookingOrder";
import { BookingOrderLineItem } from "../../../models/BookingOrderLineItem";
import { Price } from "../../../models/Price";
export declare class BookingOrderLineItemRelationsResolver {
    LineItemPrice(bookingOrderLineItem: BookingOrderLineItem, ctx: any): Promise<Price>;
    Booking(bookingOrderLineItem: BookingOrderLineItem, ctx: any): Promise<BookingOrder>;
}
