import { InventoryCreateOrConnectWithoutArtworkInput } from "../inputs/InventoryCreateOrConnectWithoutArtworkInput";
import { InventoryCreateWithoutArtworkInput } from "../inputs/InventoryCreateWithoutArtworkInput";
import { InventoryWhereUniqueInput } from "../inputs/InventoryWhereUniqueInput";
export declare class InventoryCreateNestedOneWithoutArtworkInput {
    create?: InventoryCreateWithoutArtworkInput | undefined;
    connectOrCreate?: InventoryCreateOrConnectWithoutArtworkInput | undefined;
    connect?: InventoryWhereUniqueInput | undefined;
}
