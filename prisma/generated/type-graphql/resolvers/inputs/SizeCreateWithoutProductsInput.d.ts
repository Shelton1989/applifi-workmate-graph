import { OrderLineItemCreateNestedManyWithoutSelectedSizeInput } from "../inputs/OrderLineItemCreateNestedManyWithoutSelectedSizeInput";
import { SizeCreateproductIdsInput } from "../inputs/SizeCreateproductIdsInput";
export declare class SizeCreateWithoutProductsInput {
    id?: string | undefined;
    value: string;
    region: "US" | "UK" | "EU" | "UNIVERSAL";
    productIds?: SizeCreateproductIdsInput | undefined;
    OrderLineItems?: OrderLineItemCreateNestedManyWithoutSelectedSizeInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
