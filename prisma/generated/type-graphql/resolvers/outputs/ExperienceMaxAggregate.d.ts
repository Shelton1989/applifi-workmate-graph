export declare class ExperienceMaxAggregate {
    id: string | null;
    tenantId: string | null;
    productLink: string | null;
    stripeProductId: string | null;
    title: string | null;
    description: string | null;
    category: "CAMPING" | null;
    photo: string | null;
    duration: number | null;
    publishStatus: "DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED" | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}
