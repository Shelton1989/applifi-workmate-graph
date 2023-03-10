import { TenantCountOrderByAggregateInput } from "../inputs/TenantCountOrderByAggregateInput";
import { TenantMaxOrderByAggregateInput } from "../inputs/TenantMaxOrderByAggregateInput";
import { TenantMinOrderByAggregateInput } from "../inputs/TenantMinOrderByAggregateInput";
export declare class TenantOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    slug?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    logoImage?: "asc" | "desc" | undefined;
    avatar?: "asc" | "desc" | undefined;
    coverImage?: "asc" | "desc" | undefined;
    MealImages?: "asc" | "desc" | undefined;
    acceptedUserEmailDomains?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: TenantCountOrderByAggregateInput | undefined;
    _max?: TenantMaxOrderByAggregateInput | undefined;
    _min?: TenantMinOrderByAggregateInput | undefined;
}
