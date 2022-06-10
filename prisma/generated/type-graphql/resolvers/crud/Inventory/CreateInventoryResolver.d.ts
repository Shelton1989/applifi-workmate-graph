import { GraphQLResolveInfo } from "graphql";
import { CreateInventoryArgs } from "./args/CreateInventoryArgs";
import { Inventory } from "../../../models/Inventory";
export declare class CreateInventoryResolver {
    createInventory(ctx: any, info: GraphQLResolveInfo, args: CreateInventoryArgs): Promise<Inventory>;
}
