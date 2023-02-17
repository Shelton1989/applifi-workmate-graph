export declare class TransactionCreateManyBookingOrderInput {
    id?: string | undefined;
    amountInLowestDenomination: number;
    currencyId?: string | undefined;
    SelectedPaymentType?: string | undefined;
    stripePaymentReference?: string | undefined;
    paymentMethod?: "STRIPE" | "PAYPAL" | "CASH" | "BANK_TRANSFER" | "OTHER" | undefined;
    paymentType?: "OTHER" | "FULL" | "DEPOSIT" | "SECONDARY" | "FINAL" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
