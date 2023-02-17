export declare class BookingOrderCreateManyExperienceInput {
    id?: string | undefined;
    status?: "OPEN" | "BOOKED_PENDING_PAYMENT" | "BOOKED_DEPOSIT_PAID" | "BOOKED_PENDING_FINAL_PAYMENT" | "BOOKED" | "READY_FOR_CHECK_IN" | "CHECKED_IN" | "READY_FOR_CHECK_OUT" | "COMPLETE" | "CANCELLED" | undefined;
    buyerId: string;
    tenantId: string;
    PaymentStatus?: "PENDING" | "PAID" | "REFUNDED" | "FAILED" | "CANCELLED" | "OTHER" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
