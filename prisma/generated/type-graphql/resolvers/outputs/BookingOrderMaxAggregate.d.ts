export declare class BookingOrderMaxAggregate {
    id: string | null;
    status: "OPEN" | "BOOKED" | "BOOKED_PENDING_PAYMENT" | "READY_FOR_CHECK_IN" | "CHECKED_IN" | "READY_FOR_CHECK_OUT" | "COMPLETE" | "CANCELLED" | null;
    SelectedPaymentType: string | null;
    stripePaymentReference: string | null;
    buyerId: string | null;
    tenantId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}
