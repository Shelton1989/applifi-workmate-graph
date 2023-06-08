import { CommentOrderByRelationAggregateInput } from "../inputs/CommentOrderByRelationAggregateInput";
import { TenantOrderByWithRelationInput } from "../inputs/TenantOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class DocumentOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    publishStatus?: "asc" | "desc" | undefined;
    indexStatus?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    link?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    source?: "asc" | "desc" | undefined;
    shortDescription?: "asc" | "desc" | undefined;
    documentType?: "asc" | "desc" | undefined;
    Tenant?: TenantOrderByWithRelationInput | undefined;
    tenantId?: "asc" | "desc" | undefined;
    Comments?: CommentOrderByRelationAggregateInput | undefined;
    CreatedBy?: UserOrderByWithRelationInput | undefined;
    createdByUserId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
