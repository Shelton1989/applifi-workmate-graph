import { Meal } from "../models/Meal";
export declare class MealAvailability {
    id: string;
    Meal?: Meal;
    mealId: string;
    startDate?: Date | null;
    endDate?: Date | null;
    createdAt: Date;
    updatedAt: Date;
}
