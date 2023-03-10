import { Meal } from "../models/Meal";
import { MealItemOption } from "../models/MealItemOption";
import { OrderLineItem } from "../models/OrderLineItem";
import { MealItemCount } from "../resolvers/outputs/MealItemCount";
export declare class MealItem {
    id: string;
    Meals?: Meal[];
    mealIds: string[];
    title: string;
    shortDescription: string;
    Options?: MealItemOption[];
    OrderLineItems?: OrderLineItem[];
    createdAt: Date;
    updatedAt: Date;
    _count?: MealItemCount | null;
}
