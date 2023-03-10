import { Meal } from "../../../models/Meal";
import { MealAvailability } from "../../../models/MealAvailability";
export declare class MealAvailabilityRelationsResolver {
    Meal(mealAvailability: MealAvailability, ctx: any): Promise<Meal>;
}
