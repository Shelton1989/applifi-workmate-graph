import { TenantOrderByWithRelationInput } from "../inputs/TenantOrderByWithRelationInput";
export declare class BillingOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    Tenant?: TenantOrderByWithRelationInput | undefined;
    tenantId?: "asc" | "desc" | undefined;
    stripeCustomerId?: "asc" | "desc" | undefined;
    plan?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
