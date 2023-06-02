export declare class DocumentMinAggregate {
    id: string | null;
    publishStatus: "DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED" | null;
    indexStatus: "INDEXED" | "NOT_INDEXED" | "INDEXING" | "INDEXING_FAILED" | "INDEXING_FAILED_LIMIT_REACHED" | "INDEXING_FAILED_DOCUMENT_INACCESSIBLE" | null;
    title: string | null;
    link: string | null;
    url: string | null;
    source: string | null;
    shortDescription: string | null;
    tenantId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}
