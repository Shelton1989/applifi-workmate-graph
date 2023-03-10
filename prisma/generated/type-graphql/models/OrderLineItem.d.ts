import { MealItem } from "../models/MealItem";
import { MealItemOption } from "../models/MealItemOption";
import { Order } from "../models/Order";
export declare class OrderLineItem {
    id: string;
    details?: string | null;
    comments?: string | null;
    selectedMealItem?: MealItem | null;
    mealItemId?: string | null;
    selectedMealItemOption?: MealItemOption | null;
    mealItemOptionId?: string | null;
    Booking?: Order;
    bookingId: string;
    createdAt: Date;
    updatedAt: Date;
}
