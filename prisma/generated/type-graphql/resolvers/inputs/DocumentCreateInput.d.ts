import { CommentCreateNestedManyWithoutDocumentInput } from "../inputs/CommentCreateNestedManyWithoutDocumentInput";
import { TenantCreateNestedOneWithoutDocumentsInput } from "../inputs/TenantCreateNestedOneWithoutDocumentsInput";
export declare class DocumentCreateInput {
    id?: string | undefined;
    publishStatus?: "DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED" | undefined;
    indexStatus?: "INDEXED" | "NOT_INDEXED" | "INDEXING" | "INDEXING_FAILED" | undefined;
    title: string;
    link?: string | undefined;
    url?: string | undefined;
    source?: string | undefined;
    shortDescription?: string | undefined;
    Tenant: TenantCreateNestedOneWithoutDocumentsInput;
    Comments?: CommentCreateNestedManyWithoutDocumentInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
