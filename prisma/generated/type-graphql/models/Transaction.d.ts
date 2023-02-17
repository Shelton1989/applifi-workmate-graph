import { BookingOrder } from "../models/BookingOrder";
import { Currency } from "../models/Currency";
export declare class Transaction {
    id: string;
    BookingOrder?: BookingOrder;
    bookingOrderId: string;
    amountInLowestDenomination: number;
    currency?: Currency | null;
    currencyId?: string | null;
    SelectedPaymentType?: string | null;
    stripePaymentReference?: string | null;
    paymentMethod: "STRIPE" | "PAYPAL" | "CASH" | "BANK_TRANSFER" | "OTHER";
    paymentType: "OTHER" | "FULL" | "DEPOSIT" | "SECONDARY" | "FINAL";
    createdAt: Date;
    updatedAt: Date;
}
