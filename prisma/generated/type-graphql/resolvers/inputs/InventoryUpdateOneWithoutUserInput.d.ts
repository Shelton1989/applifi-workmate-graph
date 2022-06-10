import { InventoryCreateOrConnectWithoutUserInput } from "../inputs/InventoryCreateOrConnectWithoutUserInput";
import { InventoryCreateWithoutUserInput } from "../inputs/InventoryCreateWithoutUserInput";
import { InventoryUpdateWithoutUserInput } from "../inputs/InventoryUpdateWithoutUserInput";
import { InventoryUpsertWithoutUserInput } from "../inputs/InventoryUpsertWithoutUserInput";
import { InventoryWhereUniqueInput } from "../inputs/InventoryWhereUniqueInput";
export declare class InventoryUpdateOneWithoutUserInput {
    create?: InventoryCreateWithoutUserInput | undefined;
    connectOrCreate?: InventoryCreateOrConnectWithoutUserInput | undefined;
    upsert?: InventoryUpsertWithoutUserInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: InventoryWhereUniqueInput | undefined;
    update?: InventoryUpdateWithoutUserInput | undefined;
}
