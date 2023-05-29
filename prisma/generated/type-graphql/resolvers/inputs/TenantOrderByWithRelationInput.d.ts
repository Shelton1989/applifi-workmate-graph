import { BillingOrderByWithRelationInput } from "../inputs/BillingOrderByWithRelationInput";
import { DocumentOrderByRelationAggregateInput } from "../inputs/DocumentOrderByRelationAggregateInput";
import { QueryOrderByRelationAggregateInput } from "../inputs/QueryOrderByRelationAggregateInput";
import { UserOrderByRelationAggregateInput } from "../inputs/UserOrderByRelationAggregateInput";
export declare class TenantOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    slug?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    logoImage?: "asc" | "desc" | undefined;
    avatar?: "asc" | "desc" | undefined;
    Users?: UserOrderByRelationAggregateInput | undefined;
    Queries?: QueryOrderByRelationAggregateInput | undefined;
    Documents?: DocumentOrderByRelationAggregateInput | undefined;
    Billing?: BillingOrderByWithRelationInput | undefined;
    acceptedUserEmailDomains?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
