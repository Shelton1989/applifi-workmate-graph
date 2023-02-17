export declare class BookingOrderMaxAggregate {
    id: string | null;
    experienceId: string | null;
    status: "OPEN" | "BOOKED_PENDING_PAYMENT" | "BOOKED_DEPOSIT_PAID" | "BOOKED_PENDING_FINAL_PAYMENT" | "BOOKED" | "READY_FOR_CHECK_IN" | "CHECKED_IN" | "READY_FOR_CHECK_OUT" | "COMPLETE" | "CANCELLED" | null;
    buyerId: string | null;
    tenantId: string | null;
    PaymentStatus: "PENDING" | "PAID" | "REFUNDED" | "FAILED" | "CANCELLED" | "OTHER" | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}
