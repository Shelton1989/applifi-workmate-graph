import { ProductCreateNestedManyWithoutSizesInput } from "../inputs/ProductCreateNestedManyWithoutSizesInput";
import { SizeCreateproductIdsInput } from "../inputs/SizeCreateproductIdsInput";
export declare class SizeCreateWithoutOrderLineItemsInput {
    id?: string | undefined;
    value: string;
    region: "US" | "UK" | "EU" | "UNIVERSAL";
    Products?: ProductCreateNestedManyWithoutSizesInput | undefined;
    productIds?: SizeCreateproductIdsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
