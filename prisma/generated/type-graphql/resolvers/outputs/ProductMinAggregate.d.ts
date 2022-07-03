export declare class ProductMinAggregate {
    id: string | null;
    publishStatus: "DRAFT" | "PUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED" | null;
    description: string | null;
    priceId: string | null;
    availableQuantity: number | null;
    photo: string | null;
    baseProductId: string | null;
    inventoryId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}
