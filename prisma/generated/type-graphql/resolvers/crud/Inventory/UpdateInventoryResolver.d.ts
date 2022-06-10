import { GraphQLResolveInfo } from "graphql";
import { UpdateInventoryArgs } from "./args/UpdateInventoryArgs";
import { Inventory } from "../../../models/Inventory";
export declare class UpdateInventoryResolver {
    updateInventory(ctx: any, info: GraphQLResolveInfo, args: UpdateInventoryArgs): Promise<Inventory | null>;
}
