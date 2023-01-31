import { BookingOrder } from "../models/BookingOrder";
import { Price } from "../models/Price";
export declare class BookingOrderLineItem {
    id: string;
    details?: string | null;
    comments?: string | null;
    LineItemPrice?: Price;
    priceId: string;
    Booking?: BookingOrder;
    bookingId: string;
    createdAt: Date;
    updatedAt: Date;
}
