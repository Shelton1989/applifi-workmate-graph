import { LLMQueryCountOrderByAggregateInput } from "../inputs/LLMQueryCountOrderByAggregateInput";
import { LLMQueryMaxOrderByAggregateInput } from "../inputs/LLMQueryMaxOrderByAggregateInput";
import { LLMQueryMinOrderByAggregateInput } from "../inputs/LLMQueryMinOrderByAggregateInput";
export declare class LLMQueryOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    tenantId?: "asc" | "desc" | undefined;
    queryLink?: "asc" | "desc" | undefined;
    question?: "asc" | "desc" | undefined;
    response?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    _count?: LLMQueryCountOrderByAggregateInput | undefined;
    _max?: LLMQueryMaxOrderByAggregateInput | undefined;
    _min?: LLMQueryMinOrderByAggregateInput | undefined;
}
