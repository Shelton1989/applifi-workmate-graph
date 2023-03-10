import { Meal } from "../../../models/Meal";
import { Order } from "../../../models/Order";
import { OrderLineItem } from "../../../models/OrderLineItem";
import { Tenant } from "../../../models/Tenant";
import { User } from "../../../models/User";
import { OrderItemsArgs } from "./args/OrderItemsArgs";
export declare class OrderRelationsResolver {
    Meal(order: Order, ctx: any): Promise<Meal>;
    Patient(order: Order, ctx: any): Promise<User>;
    Tenant(order: Order, ctx: any): Promise<Tenant>;
    Items(order: Order, ctx: any, args: OrderItemsArgs): Promise<OrderLineItem[]>;
}
