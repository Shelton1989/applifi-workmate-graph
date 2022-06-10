import { GraphQLResolveInfo } from "graphql";
import { UpsertInventoryArgs } from "./args/UpsertInventoryArgs";
import { Inventory } from "../../../models/Inventory";
export declare class UpsertInventoryResolver {
    upsertInventory(ctx: any, info: GraphQLResolveInfo, args: UpsertInventoryArgs): Promise<Inventory>;
}
