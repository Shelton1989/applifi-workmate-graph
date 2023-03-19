import { MealItem } from "../../../models/MealItem";
import { MealItemOption } from "../../../models/MealItemOption";
import { Order } from "../../../models/Order";
import { OrderLineItem } from "../../../models/OrderLineItem";
export declare class OrderLineItemRelationsResolver {
    selectedMealItem(orderLineItem: OrderLineItem, ctx: any): Promise<MealItem | null>;
    selectedMealItemOption(orderLineItem: OrderLineItem, ctx: any): Promise<MealItemOption | null>;
    Order(orderLineItem: OrderLineItem, ctx: any): Promise<Order>;
}
