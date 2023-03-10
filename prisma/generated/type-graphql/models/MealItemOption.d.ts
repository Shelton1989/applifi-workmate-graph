import { MealItem } from "../models/MealItem";
import { OrderLineItem } from "../models/OrderLineItem";
import { MealItemOptionCount } from "../resolvers/outputs/MealItemOptionCount";
export declare class MealItemOption {
    id: string;
    MealItem?: MealItem;
    mealItemId: string;
    title: string;
    shortDescription: string;
    OrderLineItems?: OrderLineItem[];
    createdAt: Date;
    updatedAt: Date;
    _count?: MealItemOptionCount | null;
}
