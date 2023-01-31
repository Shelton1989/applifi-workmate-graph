import { BookingOrderOrderByWithRelationInput } from "../inputs/BookingOrderOrderByWithRelationInput";
import { PriceOrderByWithRelationInput } from "../inputs/PriceOrderByWithRelationInput";
export declare class BookingOrderLineItemOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    details?: "asc" | "desc" | undefined;
    comments?: "asc" | "desc" | undefined;
    LineItemPrice?: PriceOrderByWithRelationInput | undefined;
    priceId?: "asc" | "desc" | undefined;
    Booking?: BookingOrderOrderByWithRelationInput | undefined;
    bookingId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
