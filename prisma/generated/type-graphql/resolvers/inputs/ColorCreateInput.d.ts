import { ColorCreateproductIdsInput } from "../inputs/ColorCreateproductIdsInput";
import { OrderLineItemCreateNestedManyWithoutSelectedColorInput } from "../inputs/OrderLineItemCreateNestedManyWithoutSelectedColorInput";
import { ProductCreateNestedManyWithoutColorsInput } from "../inputs/ProductCreateNestedManyWithoutColorsInput";
export declare class ColorCreateInput {
    id?: string | undefined;
    name: string;
    hex: string;
    Products?: ProductCreateNestedManyWithoutColorsInput | undefined;
    productIds?: ColorCreateproductIdsInput | undefined;
    OrderLineItems?: OrderLineItemCreateNestedManyWithoutSelectedColorInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
