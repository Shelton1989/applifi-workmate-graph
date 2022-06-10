export declare class BrandCreateWithoutBrandProductsInput {
    id?: string | undefined;
    name: string;
    description: string;
    tagline: string;
    status: "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED";
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
