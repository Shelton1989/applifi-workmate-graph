import { Color } from "../../../models/Color";
import { OrderLineItem } from "../../../models/OrderLineItem";
import { Product } from "../../../models/Product";
import { ColorOrderLineItemsArgs } from "./args/ColorOrderLineItemsArgs";
import { ColorProductsArgs } from "./args/ColorProductsArgs";
export declare class ColorRelationsResolver {
    Products(color: Color, ctx: any, args: ColorProductsArgs): Promise<Product[]>;
    OrderLineItems(color: Color, ctx: any, args: ColorOrderLineItemsArgs): Promise<OrderLineItem[]>;
}
