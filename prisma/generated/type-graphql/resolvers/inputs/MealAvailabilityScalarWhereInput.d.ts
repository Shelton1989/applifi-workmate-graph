import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class MealAvailabilityScalarWhereInput {
    AND?: MealAvailabilityScalarWhereInput[] | undefined;
    OR?: MealAvailabilityScalarWhereInput[] | undefined;
    NOT?: MealAvailabilityScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    mealId?: StringFilter | undefined;
    startDate?: DateTimeNullableFilter | undefined;
    endDate?: DateTimeNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
