import { TransactionAvgAggregate } from "../outputs/TransactionAvgAggregate";
import { TransactionCountAggregate } from "../outputs/TransactionCountAggregate";
import { TransactionMaxAggregate } from "../outputs/TransactionMaxAggregate";
import { TransactionMinAggregate } from "../outputs/TransactionMinAggregate";
import { TransactionSumAggregate } from "../outputs/TransactionSumAggregate";
export declare class TransactionGroupBy {
    id: string;
    bookingOrderId: string;
    amountInLowestDenomination: number;
    currencyId: string | null;
    SelectedPaymentType: string | null;
    stripePaymentReference: string | null;
    paymentMethod: "STRIPE" | "PAYPAL" | "CASH" | "BANK_TRANSFER" | "OTHER";
    paymentType: "OTHER" | "FULL" | "DEPOSIT" | "SECONDARY" | "FINAL";
    createdAt: Date;
    updatedAt: Date;
    _count: TransactionCountAggregate | null;
    _avg: TransactionAvgAggregate | null;
    _sum: TransactionSumAggregate | null;
    _min: TransactionMinAggregate | null;
    _max: TransactionMaxAggregate | null;
}
