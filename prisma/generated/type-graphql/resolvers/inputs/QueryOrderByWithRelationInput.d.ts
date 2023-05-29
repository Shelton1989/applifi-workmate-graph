import { TenantOrderByWithRelationInput } from "../inputs/TenantOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class QueryOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    Tenant?: TenantOrderByWithRelationInput | undefined;
    tenantId?: "asc" | "desc" | undefined;
    queryLink?: "asc" | "desc" | undefined;
    queryText?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    User?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
}
