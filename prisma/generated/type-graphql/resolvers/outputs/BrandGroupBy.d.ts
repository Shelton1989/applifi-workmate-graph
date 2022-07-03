import { BrandCountAggregate } from "../outputs/BrandCountAggregate";
import { BrandMaxAggregate } from "../outputs/BrandMaxAggregate";
import { BrandMinAggregate } from "../outputs/BrandMinAggregate";
export declare class BrandGroupBy {
    id: string;
    name: string;
    description: string;
    tagline: string;
    status: "DRAFT" | "PUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED";
    createdAt: Date;
    updatedAt: Date;
    _count: BrandCountAggregate | null;
    _min: BrandMinAggregate | null;
    _max: BrandMaxAggregate | null;
}
