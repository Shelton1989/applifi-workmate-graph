import { BookingOrder } from "../../../models/BookingOrder";
import { Currency } from "../../../models/Currency";
import { Transaction } from "../../../models/Transaction";
export declare class TransactionRelationsResolver {
    BookingOrder(transaction: Transaction, ctx: any): Promise<BookingOrder>;
    currency(transaction: Transaction, ctx: any): Promise<Currency | null>;
}
