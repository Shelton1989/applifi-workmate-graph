import { Artwork } from "../../../models/Artwork";
import { Inventory } from "../../../models/Inventory";
import { Product } from "../../../models/Product";
import { User } from "../../../models/User";
import { InventoryArtworkArgs } from "./args/InventoryArtworkArgs";
import { InventoryProductsArgs } from "./args/InventoryProductsArgs";
export declare class InventoryRelationsResolver {
    Products(inventory: Inventory, ctx: any, args: InventoryProductsArgs): Promise<Product[]>;
    Artwork(inventory: Inventory, ctx: any, args: InventoryArtworkArgs): Promise<Artwork[]>;
    User(inventory: Inventory, ctx: any): Promise<User>;
}
