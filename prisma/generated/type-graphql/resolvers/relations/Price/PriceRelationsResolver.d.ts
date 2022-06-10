import { Currency } from "../../../models/Currency";
import { OrderLineItem } from "../../../models/OrderLineItem";
import { Price } from "../../../models/Price";
import { Product } from "../../../models/Product";
import { ShippingMethod } from "../../../models/ShippingMethod";
import { PriceOrderLineItemsArgs } from "./args/PriceOrderLineItemsArgs";
import { PriceProductsArgs } from "./args/PriceProductsArgs";
import { PriceShippingMethodsArgs } from "./args/PriceShippingMethodsArgs";
export declare class PriceRelationsResolver {
    currency(price: Price, ctx: any): Promise<Currency>;
    ShippingMethods(price: Price, ctx: any, args: PriceShippingMethodsArgs): Promise<ShippingMethod[]>;
    Products(price: Price, ctx: any, args: PriceProductsArgs): Promise<Product[]>;
    OrderLineItems(price: Price, ctx: any, args: PriceOrderLineItemsArgs): Promise<OrderLineItem[]>;
}
