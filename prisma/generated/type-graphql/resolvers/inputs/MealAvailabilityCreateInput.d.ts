import { MealCreateNestedOneWithoutAvailabilityInput } from "../inputs/MealCreateNestedOneWithoutAvailabilityInput";
export declare class MealAvailabilityCreateInput {
    id?: string | undefined;
    Meal: MealCreateNestedOneWithoutAvailabilityInput;
    startDate?: Date | undefined;
    endDate?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
