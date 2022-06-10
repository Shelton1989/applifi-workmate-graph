import { InventoryCreateOrConnectWithoutArtworkInput } from "../inputs/InventoryCreateOrConnectWithoutArtworkInput";
import { InventoryCreateWithoutArtworkInput } from "../inputs/InventoryCreateWithoutArtworkInput";
import { InventoryUpdateWithoutArtworkInput } from "../inputs/InventoryUpdateWithoutArtworkInput";
import { InventoryUpsertWithoutArtworkInput } from "../inputs/InventoryUpsertWithoutArtworkInput";
import { InventoryWhereUniqueInput } from "../inputs/InventoryWhereUniqueInput";
export declare class InventoryUpdateOneRequiredWithoutArtworkInput {
    create?: InventoryCreateWithoutArtworkInput | undefined;
    connectOrCreate?: InventoryCreateOrConnectWithoutArtworkInput | undefined;
    upsert?: InventoryUpsertWithoutArtworkInput | undefined;
    connect?: InventoryWhereUniqueInput | undefined;
    update?: InventoryUpdateWithoutArtworkInput | undefined;
}
