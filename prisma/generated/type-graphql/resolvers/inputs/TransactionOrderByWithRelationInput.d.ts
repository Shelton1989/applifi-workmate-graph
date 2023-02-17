import { BookingOrderOrderByWithRelationInput } from "../inputs/BookingOrderOrderByWithRelationInput";
import { CurrencyOrderByWithRelationInput } from "../inputs/CurrencyOrderByWithRelationInput";
export declare class TransactionOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    BookingOrder?: BookingOrderOrderByWithRelationInput | undefined;
    bookingOrderId?: "asc" | "desc" | undefined;
    amountInLowestDenomination?: "asc" | "desc" | undefined;
    currency?: CurrencyOrderByWithRelationInput | undefined;
    currencyId?: "asc" | "desc" | undefined;
    SelectedPaymentType?: "asc" | "desc" | undefined;
    stripePaymentReference?: "asc" | "desc" | undefined;
    paymentMethod?: "asc" | "desc" | undefined;
    paymentType?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
