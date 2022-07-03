export declare class BrandMaxAggregate {
    id: string | null;
    name: string | null;
    description: string | null;
    tagline: string | null;
    status: "DRAFT" | "PUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED" | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}
