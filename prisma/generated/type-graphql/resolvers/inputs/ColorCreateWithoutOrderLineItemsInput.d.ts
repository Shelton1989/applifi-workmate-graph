import { ColorCreateproductIdsInput } from "../inputs/ColorCreateproductIdsInput";
import { ProductCreateNestedManyWithoutColorsInput } from "../inputs/ProductCreateNestedManyWithoutColorsInput";
export declare class ColorCreateWithoutOrderLineItemsInput {
    id?: string | undefined;
    name: string;
    hex: string;
    Products?: ProductCreateNestedManyWithoutColorsInput | undefined;
    productIds?: ColorCreateproductIdsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
