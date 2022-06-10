import { ColorCreateproductIdsInput } from "../inputs/ColorCreateproductIdsInput";
import { OrderLineItemCreateNestedManyWithoutSelectedColorInput } from "../inputs/OrderLineItemCreateNestedManyWithoutSelectedColorInput";
export declare class ColorCreateWithoutProductsInput {
    id?: string | undefined;
    name: string;
    hex: string;
    productIds?: ColorCreateproductIdsInput | undefined;
    OrderLineItems?: OrderLineItemCreateNestedManyWithoutSelectedColorInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
