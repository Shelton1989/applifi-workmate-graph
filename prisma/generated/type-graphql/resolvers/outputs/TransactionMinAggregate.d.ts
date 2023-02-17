export declare class TransactionMinAggregate {
    id: string | null;
    bookingOrderId: string | null;
    amountInLowestDenomination: number | null;
    currencyId: string | null;
    SelectedPaymentType: string | null;
    stripePaymentReference: string | null;
    paymentMethod: "STRIPE" | "PAYPAL" | "CASH" | "BANK_TRANSFER" | "OTHER" | null;
    paymentType: "OTHER" | "FULL" | "DEPOSIT" | "SECONDARY" | "FINAL" | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}
