import { InventoryOrderByWithAggregationInput } from "../../../inputs/InventoryOrderByWithAggregationInput";
import { InventoryScalarWhereWithAggregatesInput } from "../../../inputs/InventoryScalarWhereWithAggregatesInput";
import { InventoryWhereInput } from "../../../inputs/InventoryWhereInput";
export declare class GroupByInventoryArgs {
    where?: InventoryWhereInput | undefined;
    orderBy?: InventoryOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "userId" | "createdAt" | "updatedAt">;
    having?: InventoryScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
