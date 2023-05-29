import { BillingCountOrderByAggregateInput } from "../inputs/BillingCountOrderByAggregateInput";
import { BillingMaxOrderByAggregateInput } from "../inputs/BillingMaxOrderByAggregateInput";
import { BillingMinOrderByAggregateInput } from "../inputs/BillingMinOrderByAggregateInput";
export declare class BillingOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    tenantId?: "asc" | "desc" | undefined;
    stripeCustomerId?: "asc" | "desc" | undefined;
    plan?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: BillingCountOrderByAggregateInput | undefined;
    _max?: BillingMaxOrderByAggregateInput | undefined;
    _min?: BillingMinOrderByAggregateInput | undefined;
}
