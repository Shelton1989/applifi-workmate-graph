import { Brand } from "../models/Brand";
import { Product } from "../models/Product";
import { BrandProductCount } from "../resolvers/outputs/BrandProductCount";
export declare class BrandProduct {
    id: string;
    name: string;
    releaseYear?: Date | null;
    description: string;
    type: "SNEAKER" | "TSHIRT" | "CREWNECK" | "JEANS" | "JOGGER" | "FITTED";
    category: "MEN" | "WOMEN" | "CHILDREN" | "ANY";
    brand?: Brand;
    brandId: string;
    status: "DRAFT" | "PUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED";
    Products?: Product[];
    createdAt: Date;
    updatedAt: Date;
    _count?: BrandProductCount | null;
}
