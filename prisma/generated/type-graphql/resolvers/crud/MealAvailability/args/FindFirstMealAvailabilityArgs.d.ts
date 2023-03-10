import { MealAvailabilityOrderByWithRelationInput } from "../../../inputs/MealAvailabilityOrderByWithRelationInput";
import { MealAvailabilityWhereInput } from "../../../inputs/MealAvailabilityWhereInput";
import { MealAvailabilityWhereUniqueInput } from "../../../inputs/MealAvailabilityWhereUniqueInput";
export declare class FindFirstMealAvailabilityArgs {
    where?: MealAvailabilityWhereInput | undefined;
    orderBy?: MealAvailabilityOrderByWithRelationInput[] | undefined;
    cursor?: MealAvailabilityWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "mealId" | "startDate" | "endDate" | "createdAt" | "updatedAt"> | undefined;
}
