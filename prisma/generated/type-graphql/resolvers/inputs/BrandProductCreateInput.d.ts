import { BrandCreateNestedOneWithoutBrandProductsInput } from "../inputs/BrandCreateNestedOneWithoutBrandProductsInput";
import { ProductCreateNestedManyWithoutBaseProductInput } from "../inputs/ProductCreateNestedManyWithoutBaseProductInput";
export declare class BrandProductCreateInput {
    id?: string | undefined;
    name: string;
    releaseYear?: Date | undefined;
    description: string;
    type: "SNEAKER" | "TSHIRT" | "CREWNECK" | "JEANS" | "JOGGER" | "FITTED";
    category: "MEN" | "WOMEN" | "CHILDREN" | "ANY";
    brand: BrandCreateNestedOneWithoutBrandProductsInput;
    status?: "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED" | undefined;
    Products?: ProductCreateNestedManyWithoutBaseProductInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}