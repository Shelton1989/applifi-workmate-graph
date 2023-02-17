import { PriceOrderByRelationAggregateInput } from "../inputs/PriceOrderByRelationAggregateInput";
import { TransactionOrderByRelationAggregateInput } from "../inputs/TransactionOrderByRelationAggregateInput";
export declare class CurrencyOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    symbol?: "asc" | "desc" | undefined;
    code?: "asc" | "desc" | undefined;
    prices?: PriceOrderByRelationAggregateInput | undefined;
    Transactions?: TransactionOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
