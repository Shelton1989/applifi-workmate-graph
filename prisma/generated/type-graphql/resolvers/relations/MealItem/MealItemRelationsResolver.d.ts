import { Meal } from "../../../models/Meal";
import { MealItem } from "../../../models/MealItem";
import { MealItemOption } from "../../../models/MealItemOption";
import { OrderLineItem } from "../../../models/OrderLineItem";
import { MealItemMealsArgs } from "./args/MealItemMealsArgs";
import { MealItemOptionsArgs } from "./args/MealItemOptionsArgs";
import { MealItemOrderLineItemsArgs } from "./args/MealItemOrderLineItemsArgs";
export declare class MealItemRelationsResolver {
    Meals(mealItem: MealItem, ctx: any, args: MealItemMealsArgs): Promise<Meal[]>;
    Options(mealItem: MealItem, ctx: any, args: MealItemOptionsArgs): Promise<MealItemOption[]>;
    OrderLineItems(mealItem: MealItem, ctx: any, args: MealItemOrderLineItemsArgs): Promise<OrderLineItem[]>;
}
