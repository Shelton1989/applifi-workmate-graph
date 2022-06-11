export declare class BrandProductMaxAggregate {
    id: string | null;
    name: string | null;
    releaseYear: Date | null;
    description: string | null;
    type: "SNEAKER" | "TSHIRT" | "CREWNECK" | "JEANS" | "JOGGER" | "FITTED" | null;
    category: "MEN" | "WOMEN" | "CHILDREN" | "ANY" | null;
    brandId: string | null;
    status: "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED" | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}