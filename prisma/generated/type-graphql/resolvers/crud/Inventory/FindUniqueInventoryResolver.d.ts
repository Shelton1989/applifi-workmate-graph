import { GraphQLResolveInfo } from "graphql";
import { FindUniqueInventoryArgs } from "./args/FindUniqueInventoryArgs";
import { Inventory } from "../../../models/Inventory";
export declare class FindUniqueInventoryResolver {
    inventory(ctx: any, info: GraphQLResolveInfo, args: FindUniqueInventoryArgs): Promise<Inventory | null>;
}
