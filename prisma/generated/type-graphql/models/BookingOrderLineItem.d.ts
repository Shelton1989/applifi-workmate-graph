import { BookingOrder } from "../models/BookingOrder";
import { Price } from "../models/Price";
export declare class BookingOrderLineItem {
    id: string;
    LineItemPrice?: Price;
    priceId: string;
    Booking?: BookingOrder;
    bookingId: string;
    createdAt: Date;
    updatedAt: Date;
}
