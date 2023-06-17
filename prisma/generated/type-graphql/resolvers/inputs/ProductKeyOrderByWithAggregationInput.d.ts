import { ProductKeyCountOrderByAggregateInput } from "../inputs/ProductKeyCountOrderByAggregateInput";
import { ProductKeyMaxOrderByAggregateInput } from "../inputs/ProductKeyMaxOrderByAggregateInput";
import { ProductKeyMinOrderByAggregateInput } from "../inputs/ProductKeyMinOrderByAggregateInput";
export declare class ProductKeyOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    billingId?: "asc" | "desc" | undefined;
    key?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: ProductKeyCountOrderByAggregateInput | undefined;
    _max?: ProductKeyMaxOrderByAggregateInput | undefined;
    _min?: ProductKeyMinOrderByAggregateInput | undefined;
}
