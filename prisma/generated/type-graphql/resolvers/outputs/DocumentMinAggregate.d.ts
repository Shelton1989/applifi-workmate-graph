export declare class DocumentMinAggregate {
    id: string | null;
    publishStatus: "DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED" | null;
    title: string | null;
    shortDescription: string | null;
    tenantId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}