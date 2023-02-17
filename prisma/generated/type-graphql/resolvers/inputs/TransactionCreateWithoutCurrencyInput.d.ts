import { BookingOrderCreateNestedOneWithoutTransactionsInput } from "../inputs/BookingOrderCreateNestedOneWithoutTransactionsInput";
export declare class TransactionCreateWithoutCurrencyInput {
    id?: string | undefined;
    BookingOrder: BookingOrderCreateNestedOneWithoutTransactionsInput;
    amountInLowestDenomination: number;
    SelectedPaymentType?: string | undefined;
    stripePaymentReference?: string | undefined;
    paymentMethod?: "STRIPE" | "PAYPAL" | "CASH" | "BANK_TRANSFER" | "OTHER" | undefined;
    paymentType?: "OTHER" | "FULL" | "DEPOSIT" | "SECONDARY" | "FINAL" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
