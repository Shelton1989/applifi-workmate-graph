export declare class BookingOrderCreateManyBuyerInput {
    id?: string | undefined;
    status?: "OPEN" | "BOOKED" | "BOOKED_PENDING_PAYMENT" | "READY_FOR_CHECK_IN" | "CHECKED_IN" | "READY_FOR_CHECK_OUT" | "COMPLETE" | "CANCELLED" | undefined;
    SelectedPaymentType?: string | undefined;
    stripePaymentReference?: string | undefined;
    tenantId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
