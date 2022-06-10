import { Artwork } from "../../../models/Artwork";
import { Inventory } from "../../../models/Inventory";
import { OrderLineItem } from "../../../models/OrderLineItem";
import { Product } from "../../../models/Product";
import { ArtworkOrderLineItemsArgs } from "./args/ArtworkOrderLineItemsArgs";
import { ArtworkProductsArgs } from "./args/ArtworkProductsArgs";
export declare class ArtworkRelationsResolver {
    Products(artwork: Artwork, ctx: any, args: ArtworkProductsArgs): Promise<Product[]>;
    Inventory(artwork: Artwork, ctx: any): Promise<Inventory>;
    OrderLineItems(artwork: Artwork, ctx: any, args: ArtworkOrderLineItemsArgs): Promise<OrderLineItem[]>;
}
