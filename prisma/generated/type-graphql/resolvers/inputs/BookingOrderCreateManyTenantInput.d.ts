export declare class BookingOrderCreateManyTenantInput {
    id?: string | undefined;
    experienceId: string;
    status?: "OPEN" | "BOOKED" | "BOOKED_PENDING_PAYMENT" | "READY_FOR_CHECK_IN" | "CHECKED_IN" | "READY_FOR_CHECK_OUT" | "COMPLETE" | "CANCELLED" | undefined;
    SelectedPaymentType?: string | undefined;
    stripePaymentReference?: string | undefined;
    buyerId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
