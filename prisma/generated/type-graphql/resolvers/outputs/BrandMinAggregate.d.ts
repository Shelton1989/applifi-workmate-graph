export declare class BrandMinAggregate {
    id: string | null;
    name: string | null;
    description: string | null;
    tagline: string | null;
    status: "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED" | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}
