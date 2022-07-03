import { ProductCreateNestedManyWithoutBaseProductInput } from "../inputs/ProductCreateNestedManyWithoutBaseProductInput";
export declare class BrandProductCreateWithoutBrandInput {
    id?: string | undefined;
    name: string;
    releaseYear?: Date | undefined;
    description: string;
    type: "SNEAKER" | "TSHIRT" | "CREWNECK" | "JEANS" | "JOGGER" | "FITTED";
    category: "MEN" | "WOMEN" | "CHILDREN" | "ANY";
    status?: "DRAFT" | "PUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED" | undefined;
    Products?: ProductCreateNestedManyWithoutBaseProductInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
