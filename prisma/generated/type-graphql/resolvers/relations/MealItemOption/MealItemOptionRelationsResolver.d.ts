import { MealItem } from "../../../models/MealItem";
import { MealItemOption } from "../../../models/MealItemOption";
import { OrderLineItem } from "../../../models/OrderLineItem";
import { MealItemOptionOrderLineItemsArgs } from "./args/MealItemOptionOrderLineItemsArgs";
export declare class MealItemOptionRelationsResolver {
    MealItem(mealItemOption: MealItemOption, ctx: any): Promise<MealItem>;
    OrderLineItems(mealItemOption: MealItemOption, ctx: any, args: MealItemOptionOrderLineItemsArgs): Promise<OrderLineItem[]>;
}
