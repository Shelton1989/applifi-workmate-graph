import { Order } from "../../../models/Order";
import { Price } from "../../../models/Price";
import { ShippingMethod } from "../../../models/ShippingMethod";
import { ShippingMethodOrdersArgs } from "./args/ShippingMethodOrdersArgs";
export declare class ShippingMethodRelationsResolver {
    price(shippingMethod: ShippingMethod, ctx: any): Promise<Price>;
    Orders(shippingMethod: ShippingMethod, ctx: any, args: ShippingMethodOrdersArgs): Promise<Order[]>;
}
