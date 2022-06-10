import { InventoryOrderByWithRelationInput } from "../../../inputs/InventoryOrderByWithRelationInput";
import { InventoryWhereInput } from "../../../inputs/InventoryWhereInput";
import { InventoryWhereUniqueInput } from "../../../inputs/InventoryWhereUniqueInput";
export declare class FindFirstInventoryArgs {
    where?: InventoryWhereInput | undefined;
    orderBy?: InventoryOrderByWithRelationInput[] | undefined;
    cursor?: InventoryWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "userId" | "createdAt" | "updatedAt"> | undefined;
}
