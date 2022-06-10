import { InventoryCreateOrConnectWithoutProductsInput } from "../inputs/InventoryCreateOrConnectWithoutProductsInput";
import { InventoryCreateWithoutProductsInput } from "../inputs/InventoryCreateWithoutProductsInput";
import { InventoryWhereUniqueInput } from "../inputs/InventoryWhereUniqueInput";
export declare class InventoryCreateNestedOneWithoutProductsInput {
    create?: InventoryCreateWithoutProductsInput | undefined;
    connectOrCreate?: InventoryCreateOrConnectWithoutProductsInput | undefined;
    connect?: InventoryWhereUniqueInput | undefined;
}
