import { BrandProductCountAggregate } from "../outputs/BrandProductCountAggregate";
import { BrandProductMaxAggregate } from "../outputs/BrandProductMaxAggregate";
import { BrandProductMinAggregate } from "../outputs/BrandProductMinAggregate";
export declare class BrandProductGroupBy {
    id: string;
    name: string;
    releaseYear: Date | null;
    description: string;
    type: "SNEAKER" | "TSHIRT" | "CREWNECK" | "JEANS" | "JOGGER" | "FITTED";
    category: "MEN" | "WOMEN" | "CHILDREN" | "ANY";
    brandId: string;
    status: "DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED";
    createdAt: Date;
    updatedAt: Date;
    _count: BrandProductCountAggregate | null;
    _min: BrandProductMinAggregate | null;
    _max: BrandProductMaxAggregate | null;
}
