import { MealAvailabilityOrderByWithAggregationInput } from "../../../inputs/MealAvailabilityOrderByWithAggregationInput";
import { MealAvailabilityScalarWhereWithAggregatesInput } from "../../../inputs/MealAvailabilityScalarWhereWithAggregatesInput";
import { MealAvailabilityWhereInput } from "../../../inputs/MealAvailabilityWhereInput";
export declare class GroupByMealAvailabilityArgs {
    where?: MealAvailabilityWhereInput | undefined;
    orderBy?: MealAvailabilityOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "mealId" | "startDate" | "endDate" | "createdAt" | "updatedAt">;
    having?: MealAvailabilityScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
