import { InventoryCreateOrConnectWithoutUserInput } from "../inputs/InventoryCreateOrConnectWithoutUserInput";
import { InventoryCreateWithoutUserInput } from "../inputs/InventoryCreateWithoutUserInput";
import { InventoryWhereUniqueInput } from "../inputs/InventoryWhereUniqueInput";
export declare class InventoryCreateNestedOneWithoutUserInput {
    create?: InventoryCreateWithoutUserInput | undefined;
    connectOrCreate?: InventoryCreateOrConnectWithoutUserInput | undefined;
    connect?: InventoryWhereUniqueInput | undefined;
}
