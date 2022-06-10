import { GraphQLResolveInfo } from "graphql";
import { GroupByInventoryArgs } from "./args/GroupByInventoryArgs";
import { InventoryGroupBy } from "../../outputs/InventoryGroupBy";
export declare class GroupByInventoryResolver {
    groupByInventory(ctx: any, info: GraphQLResolveInfo, args: GroupByInventoryArgs): Promise<InventoryGroupBy[]>;
}
