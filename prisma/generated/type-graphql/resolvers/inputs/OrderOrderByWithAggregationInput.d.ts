import { OrderCountOrderByAggregateInput } from "../inputs/OrderCountOrderByAggregateInput";
import { OrderMaxOrderByAggregateInput } from "../inputs/OrderMaxOrderByAggregateInput";
import { OrderMinOrderByAggregateInput } from "../inputs/OrderMinOrderByAggregateInput";
export declare class OrderOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    mealId?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    patientId?: "asc" | "desc" | undefined;
    tenantId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: OrderCountOrderByAggregateInput | undefined;
    _max?: OrderMaxOrderByAggregateInput | undefined;
    _min?: OrderMinOrderByAggregateInput | undefined;
}
