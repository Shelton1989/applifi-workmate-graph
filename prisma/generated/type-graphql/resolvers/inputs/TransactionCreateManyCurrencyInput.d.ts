export declare class TransactionCreateManyCurrencyInput {
    id?: string | undefined;
    bookingOrderId: string;
    amountInLowestDenomination: number;
    SelectedPaymentType?: string | undefined;
    stripePaymentReference?: string | undefined;
    paymentMethod?: "STRIPE" | "PAYPAL" | "CASH" | "BANK_TRANSFER" | "OTHER" | undefined;
    paymentType?: "OTHER" | "FULL" | "DEPOSIT" | "SECONDARY" | "FINAL" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
