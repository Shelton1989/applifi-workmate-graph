import { ExperienceCreategalleryInput } from "../inputs/ExperienceCreategalleryInput";
import { ExperienceCreatelikedByIdsInput } from "../inputs/ExperienceCreatelikedByIdsInput";
export declare class ExperienceCreateManyInput {
    id?: string | undefined;
    tenantId: string;
    productLink?: string | undefined;
    stripeProductId?: string | undefined;
    title: string;
    description: string;
    category: "CAMPING";
    photo?: string | undefined;
    gallery?: ExperienceCreategalleryInput | undefined;
    location: string;
    duration: number;
    publishStatus?: "DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED" | undefined;
    likedByIds?: ExperienceCreatelikedByIdsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
