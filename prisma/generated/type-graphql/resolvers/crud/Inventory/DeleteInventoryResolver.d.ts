import { GraphQLResolveInfo } from "graphql";
import { DeleteInventoryArgs } from "./args/DeleteInventoryArgs";
import { Inventory } from "../../../models/Inventory";
export declare class DeleteInventoryResolver {
    deleteInventory(ctx: any, info: GraphQLResolveInfo, args: DeleteInventoryArgs): Promise<Inventory | null>;
}
