import { CommentOrderByRelationAggregateInput } from "../inputs/CommentOrderByRelationAggregateInput";
import { TenantOrderByWithRelationInput } from "../inputs/TenantOrderByWithRelationInput";
export declare class DocumentOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    publishStatus?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    shortDescription?: "asc" | "desc" | undefined;
    Tenant?: TenantOrderByWithRelationInput | undefined;
    tenantId?: "asc" | "desc" | undefined;
    Comments?: CommentOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
