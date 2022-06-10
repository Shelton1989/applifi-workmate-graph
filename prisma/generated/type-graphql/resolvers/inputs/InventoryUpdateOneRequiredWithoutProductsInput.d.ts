import { InventoryCreateOrConnectWithoutProductsInput } from "../inputs/InventoryCreateOrConnectWithoutProductsInput";
import { InventoryCreateWithoutProductsInput } from "../inputs/InventoryCreateWithoutProductsInput";
import { InventoryUpdateWithoutProductsInput } from "../inputs/InventoryUpdateWithoutProductsInput";
import { InventoryUpsertWithoutProductsInput } from "../inputs/InventoryUpsertWithoutProductsInput";
import { InventoryWhereUniqueInput } from "../inputs/InventoryWhereUniqueInput";
export declare class InventoryUpdateOneRequiredWithoutProductsInput {
    create?: InventoryCreateWithoutProductsInput | undefined;
    connectOrCreate?: InventoryCreateOrConnectWithoutProductsInput | undefined;
    upsert?: InventoryUpsertWithoutProductsInput | undefined;
    connect?: InventoryWhereUniqueInput | undefined;
    update?: InventoryUpdateWithoutProductsInput | undefined;
}
