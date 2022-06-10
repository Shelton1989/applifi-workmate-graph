import { CurrencyCountOrderByAggregateInput } from "../inputs/CurrencyCountOrderByAggregateInput";
import { CurrencyMaxOrderByAggregateInput } from "../inputs/CurrencyMaxOrderByAggregateInput";
import { CurrencyMinOrderByAggregateInput } from "../inputs/CurrencyMinOrderByAggregateInput";
export declare class CurrencyOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    symbol?: "asc" | "desc" | undefined;
    code?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: CurrencyCountOrderByAggregateInput | undefined;
    _max?: CurrencyMaxOrderByAggregateInput | undefined;
    _min?: CurrencyMinOrderByAggregateInput | undefined;
}
