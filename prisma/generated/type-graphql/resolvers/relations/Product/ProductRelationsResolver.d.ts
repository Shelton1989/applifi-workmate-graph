import { Artwork } from "../../../models/Artwork";
import { BrandProduct } from "../../../models/BrandProduct";
import { Color } from "../../../models/Color";
import { Inventory } from "../../../models/Inventory";
import { OrderLineItem } from "../../../models/OrderLineItem";
import { Price } from "../../../models/Price";
import { Product } from "../../../models/Product";
import { Size } from "../../../models/Size";
import { User } from "../../../models/User";
import { ProductArtworkArgs } from "./args/ProductArtworkArgs";
import { ProductColorsArgs } from "./args/ProductColorsArgs";
import { ProductLikedByArgs } from "./args/ProductLikedByArgs";
import { ProductOrderLineItemsArgs } from "./args/ProductOrderLineItemsArgs";
import { ProductSizesArgs } from "./args/ProductSizesArgs";
export declare class ProductRelationsResolver {
    price(product: Product, ctx: any): Promise<Price>;
    BaseProduct(product: Product, ctx: any): Promise<BrandProduct>;
    Artwork(product: Product, ctx: any, args: ProductArtworkArgs): Promise<Artwork[]>;
    Colors(product: Product, ctx: any, args: ProductColorsArgs): Promise<Color[]>;
    Sizes(product: Product, ctx: any, args: ProductSizesArgs): Promise<Size[]>;
    OrderLineItems(product: Product, ctx: any, args: ProductOrderLineItemsArgs): Promise<OrderLineItem[]>;
    LikedBy(product: Product, ctx: any, args: ProductLikedByArgs): Promise<User[]>;
    Inventory(product: Product, ctx: any): Promise<Inventory>;
}
