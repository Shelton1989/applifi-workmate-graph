import { QueryCountOrderByAggregateInput } from "../inputs/QueryCountOrderByAggregateInput";
import { QueryMaxOrderByAggregateInput } from "../inputs/QueryMaxOrderByAggregateInput";
import { QueryMinOrderByAggregateInput } from "../inputs/QueryMinOrderByAggregateInput";
export declare class QueryOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    tenantId?: "asc" | "desc" | undefined;
    queryLink?: "asc" | "desc" | undefined;
    queryText?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    _count?: QueryCountOrderByAggregateInput | undefined;
    _max?: QueryMaxOrderByAggregateInput | undefined;
    _min?: QueryMinOrderByAggregateInput | undefined;
}
