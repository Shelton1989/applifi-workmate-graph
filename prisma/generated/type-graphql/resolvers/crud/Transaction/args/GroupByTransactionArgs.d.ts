import { TransactionOrderByWithAggregationInput } from "../../../inputs/TransactionOrderByWithAggregationInput";
import { TransactionScalarWhereWithAggregatesInput } from "../../../inputs/TransactionScalarWhereWithAggregatesInput";
import { TransactionWhereInput } from "../../../inputs/TransactionWhereInput";
export declare class GroupByTransactionArgs {
    where?: TransactionWhereInput | undefined;
    orderBy?: TransactionOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "bookingOrderId" | "amountInLowestDenomination" | "currencyId" | "SelectedPaymentType" | "stripePaymentReference" | "paymentMethod" | "paymentType" | "createdAt" | "updatedAt">;
    having?: TransactionScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
