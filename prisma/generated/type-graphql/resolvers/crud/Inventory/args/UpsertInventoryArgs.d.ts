import { InventoryCreateInput } from "../../../inputs/InventoryCreateInput";
import { InventoryUpdateInput } from "../../../inputs/InventoryUpdateInput";
import { InventoryWhereUniqueInput } from "../../../inputs/InventoryWhereUniqueInput";
export declare class UpsertInventoryArgs {
    where: InventoryWhereUniqueInput;
    create: InventoryCreateInput;
    update: InventoryUpdateInput;
}
