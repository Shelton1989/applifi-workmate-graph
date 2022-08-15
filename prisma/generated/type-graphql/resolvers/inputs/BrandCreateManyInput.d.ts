export declare class BrandCreateManyInput {
    id?: string | undefined;
    name: string;
    description: string;
    tagline: string;
    status?: "DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
