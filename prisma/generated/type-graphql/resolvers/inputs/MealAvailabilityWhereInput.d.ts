import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { MealRelationFilter } from "../inputs/MealRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class MealAvailabilityWhereInput {
    AND?: MealAvailabilityWhereInput[] | undefined;
    OR?: MealAvailabilityWhereInput[] | undefined;
    NOT?: MealAvailabilityWhereInput[] | undefined;
    id?: StringFilter | undefined;
    Meal?: MealRelationFilter | undefined;
    mealId?: StringFilter | undefined;
    startDate?: DateTimeNullableFilter | undefined;
    endDate?: DateTimeNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
