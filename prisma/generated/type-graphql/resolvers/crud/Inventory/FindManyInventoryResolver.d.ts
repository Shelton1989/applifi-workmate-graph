import { GraphQLResolveInfo } from "graphql";
import { FindManyInventoryArgs } from "./args/FindManyInventoryArgs";
import { Inventory } from "../../../models/Inventory";
export declare class FindManyInventoryResolver {
    inventories(ctx: any, info: GraphQLResolveInfo, args: FindManyInventoryArgs): Promise<Inventory[]>;
}
