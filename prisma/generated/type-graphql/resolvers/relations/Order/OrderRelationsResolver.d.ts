import { Address } from "../../../models/Address";
import { Order } from "../../../models/Order";
import { OrderLineItem } from "../../../models/OrderLineItem";
import { ShippingMethod } from "../../../models/ShippingMethod";
import { User } from "../../../models/User";
import { OrderItemsArgs } from "./args/OrderItemsArgs";
export declare class OrderRelationsResolver {
    SelectedShippingAddress(order: Order, ctx: any): Promise<Address | null>;
    SelectedShippingMethod(order: Order, ctx: any): Promise<ShippingMethod | null>;
    Buyer(order: Order, ctx: any): Promise<User>;
    Seller(order: Order, ctx: any): Promise<User>;
    Items(order: Order, ctx: any, args: OrderItemsArgs): Promise<OrderLineItem[]>;
}
