import { ProductKeyOrderByRelationAggregateInput } from "../inputs/ProductKeyOrderByRelationAggregateInput";
import { TenantOrderByWithRelationInput } from "../inputs/TenantOrderByWithRelationInput";
export declare class BillingOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    Tenant?: TenantOrderByWithRelationInput | undefined;
    tenantId?: "asc" | "desc" | undefined;
    stripeCustomerId?: "asc" | "desc" | undefined;
    stripeSubscriptionId?: "asc" | "desc" | undefined;
    plan?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    ProductKeys?: ProductKeyOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
