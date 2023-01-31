export declare class BookingOrderLineItemCreateManyInput {
    id?: string | undefined;
    details?: string | undefined;
    comments?: string | undefined;
    selectedQuantity?: number | undefined;
    selectedStartDate?: Date | undefined;
    selectedEndDate?: Date | undefined;
    priceId: string;
    bookingId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
