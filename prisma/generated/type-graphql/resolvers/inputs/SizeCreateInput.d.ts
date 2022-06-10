import { OrderLineItemCreateNestedManyWithoutSelectedSizeInput } from "../inputs/OrderLineItemCreateNestedManyWithoutSelectedSizeInput";
import { ProductCreateNestedManyWithoutSizesInput } from "../inputs/ProductCreateNestedManyWithoutSizesInput";
import { SizeCreateproductIdsInput } from "../inputs/SizeCreateproductIdsInput";
export declare class SizeCreateInput {
    id?: string | undefined;
    value: string;
    region: "US" | "UK" | "EU" | "UNIVERSAL";
    Products?: ProductCreateNestedManyWithoutSizesInput | undefined;
    productIds?: SizeCreateproductIdsInput | undefined;
    OrderLineItems?: OrderLineItemCreateNestedManyWithoutSelectedSizeInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
