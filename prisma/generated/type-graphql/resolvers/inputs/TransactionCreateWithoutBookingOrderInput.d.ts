import { CurrencyCreateNestedOneWithoutTransactionsInput } from "../inputs/CurrencyCreateNestedOneWithoutTransactionsInput";
export declare class TransactionCreateWithoutBookingOrderInput {
    id?: string | undefined;
    amountInLowestDenomination: number;
    currency?: CurrencyCreateNestedOneWithoutTransactionsInput | undefined;
    SelectedPaymentType?: string | undefined;
    stripePaymentReference?: string | undefined;
    paymentMethod?: "STRIPE" | "PAYPAL" | "CASH" | "BANK_TRANSFER" | "OTHER" | undefined;
    paymentType?: "OTHER" | "FULL" | "DEPOSIT" | "SECONDARY" | "FINAL" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
