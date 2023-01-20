import { ExperienceAvgAggregate } from "../outputs/ExperienceAvgAggregate";
import { ExperienceCountAggregate } from "../outputs/ExperienceCountAggregate";
import { ExperienceMaxAggregate } from "../outputs/ExperienceMaxAggregate";
import { ExperienceMinAggregate } from "../outputs/ExperienceMinAggregate";
import { ExperienceSumAggregate } from "../outputs/ExperienceSumAggregate";
export declare class ExperienceGroupBy {
    id: string;
    tenantId: string;
    productLink: string | null;
    stripeProductId: string | null;
    title: string | null;
    description: string | null;
    category: "CAMPING" | null;
    photo: string | null;
    gallery: string[] | null;
    duration: number | null;
    publishStatus: "DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED";
    likedByIds: string[] | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ExperienceCountAggregate | null;
    _avg: ExperienceAvgAggregate | null;
    _sum: ExperienceSumAggregate | null;
    _min: ExperienceMinAggregate | null;
    _max: ExperienceMaxAggregate | null;
}
