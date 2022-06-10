import { InventoryCountOrderByAggregateInput } from "../inputs/InventoryCountOrderByAggregateInput";
import { InventoryMaxOrderByAggregateInput } from "../inputs/InventoryMaxOrderByAggregateInput";
import { InventoryMinOrderByAggregateInput } from "../inputs/InventoryMinOrderByAggregateInput";
export declare class InventoryOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: InventoryCountOrderByAggregateInput | undefined;
    _max?: InventoryMaxOrderByAggregateInput | undefined;
    _min?: InventoryMinOrderByAggregateInput | undefined;
}
