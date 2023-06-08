import { TenantCreateNestedOneWithoutDocumentsInput } from "../inputs/TenantCreateNestedOneWithoutDocumentsInput";
import { UserCreateNestedOneWithoutCreatedDocumentsInput } from "../inputs/UserCreateNestedOneWithoutCreatedDocumentsInput";
export declare class DocumentCreateWithoutCommentsInput {
    id?: string | undefined;
    publishStatus?: "DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED" | undefined;
    indexStatus?: "INDEXED" | "NOT_INDEXED" | "INDEXING" | "INDEXING_FAILED" | "INDEXING_FAILED_LIMIT_REACHED" | "INDEXING_FAILED_DOCUMENT_INACCESSIBLE" | undefined;
    title: string;
    link?: string | undefined;
    url?: string | undefined;
    source?: string | undefined;
    shortDescription?: string | undefined;
    documentType?: string | undefined;
    Tenant: TenantCreateNestedOneWithoutDocumentsInput;
    CreatedBy?: UserCreateNestedOneWithoutCreatedDocumentsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
