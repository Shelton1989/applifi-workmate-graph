import { InventoryOrderByWithRelationInput } from "../../../inputs/InventoryOrderByWithRelationInput";
import { InventoryWhereInput } from "../../../inputs/InventoryWhereInput";
import { InventoryWhereUniqueInput } from "../../../inputs/InventoryWhereUniqueInput";
export declare class AggregateInventoryArgs {
    where?: InventoryWhereInput | undefined;
    orderBy?: InventoryOrderByWithRelationInput[] | undefined;
    cursor?: InventoryWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
