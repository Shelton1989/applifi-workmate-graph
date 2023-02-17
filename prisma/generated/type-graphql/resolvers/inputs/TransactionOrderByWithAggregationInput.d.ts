import { TransactionAvgOrderByAggregateInput } from "../inputs/TransactionAvgOrderByAggregateInput";
import { TransactionCountOrderByAggregateInput } from "../inputs/TransactionCountOrderByAggregateInput";
import { TransactionMaxOrderByAggregateInput } from "../inputs/TransactionMaxOrderByAggregateInput";
import { TransactionMinOrderByAggregateInput } from "../inputs/TransactionMinOrderByAggregateInput";
import { TransactionSumOrderByAggregateInput } from "../inputs/TransactionSumOrderByAggregateInput";
export declare class TransactionOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    bookingOrderId?: "asc" | "desc" | undefined;
    amountInLowestDenomination?: "asc" | "desc" | undefined;
    currencyId?: "asc" | "desc" | undefined;
    SelectedPaymentType?: "asc" | "desc" | undefined;
    stripePaymentReference?: "asc" | "desc" | undefined;
    paymentMethod?: "asc" | "desc" | undefined;
    paymentType?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: TransactionCountOrderByAggregateInput | undefined;
    _avg?: TransactionAvgOrderByAggregateInput | undefined;
    _max?: TransactionMaxOrderByAggregateInput | undefined;
    _min?: TransactionMinOrderByAggregateInput | undefined;
    _sum?: TransactionSumOrderByAggregateInput | undefined;
}
