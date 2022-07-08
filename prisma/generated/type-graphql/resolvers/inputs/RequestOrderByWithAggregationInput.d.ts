import { RequestCountOrderByAggregateInput } from "../inputs/RequestCountOrderByAggregateInput";
import { RequestMaxOrderByAggregateInput } from "../inputs/RequestMaxOrderByAggregateInput";
import { RequestMinOrderByAggregateInput } from "../inputs/RequestMinOrderByAggregateInput";
export declare class RequestOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    subject?: "asc" | "desc" | undefined;
    message?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    socialLinks?: "asc" | "desc" | undefined;
    entityId?: "asc" | "desc" | undefined;
    requestResolution?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: RequestCountOrderByAggregateInput | undefined;
    _max?: RequestMaxOrderByAggregateInput | undefined;
    _min?: RequestMinOrderByAggregateInput | undefined;
}
