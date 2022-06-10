import { OrderLineItem } from "../../../models/OrderLineItem";
import { Product } from "../../../models/Product";
import { Size } from "../../../models/Size";
import { SizeOrderLineItemsArgs } from "./args/SizeOrderLineItemsArgs";
import { SizeProductsArgs } from "./args/SizeProductsArgs";
export declare class SizeRelationsResolver {
    Products(size: Size, ctx: any, args: SizeProductsArgs): Promise<Product[]>;
    OrderLineItems(size: Size, ctx: any, args: SizeOrderLineItemsArgs): Promise<OrderLineItem[]>;
}
