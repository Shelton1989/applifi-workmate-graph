import { BrandProduct } from "../models/BrandProduct";
import { BrandCount } from "../resolvers/outputs/BrandCount";
export declare class Brand {
    id: string;
    name: string;
    description: string;
    tagline: string;
    BrandProducts?: BrandProduct[];
    status: "DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED";
    createdAt: Date;
    updatedAt: Date;
    _count?: BrandCount | null;
}
