export declare class DocumentCreateManyInput {
    id?: string | undefined;
    publishStatus?: "DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED" | undefined;
    indexStatus?: "INDEXED" | "NOT_INDEXED" | "INDEXING" | "INDEXING_FAILED" | undefined;
    title: string;
    link?: string | undefined;
    url?: string | undefined;
    source?: string | undefined;
    shortDescription?: string | undefined;
    tenantId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
