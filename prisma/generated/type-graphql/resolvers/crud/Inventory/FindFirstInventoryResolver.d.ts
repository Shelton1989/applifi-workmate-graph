import { GraphQLResolveInfo } from "graphql";
import { FindFirstInventoryArgs } from "./args/FindFirstInventoryArgs";
import { Inventory } from "../../../models/Inventory";
export declare class FindFirstInventoryResolver {
    findFirstInventory(ctx: any, info: GraphQLResolveInfo, args: FindFirstInventoryArgs): Promise<Inventory | null>;
}
