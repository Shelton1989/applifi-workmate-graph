import { BrandProductCreateNestedManyWithoutBrandInput } from "../inputs/BrandProductCreateNestedManyWithoutBrandInput";
export declare class BrandCreateInput {
    id?: string | undefined;
    name: string;
    description: string;
    tagline: string;
    BrandProducts?: BrandProductCreateNestedManyWithoutBrandInput | undefined;
    status?: "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
