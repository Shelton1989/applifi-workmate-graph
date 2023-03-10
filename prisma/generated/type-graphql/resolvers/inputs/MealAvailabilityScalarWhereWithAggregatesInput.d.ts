import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class MealAvailabilityScalarWhereWithAggregatesInput {
    AND?: MealAvailabilityScalarWhereWithAggregatesInput[] | undefined;
    OR?: MealAvailabilityScalarWhereWithAggregatesInput[] | undefined;
    NOT?: MealAvailabilityScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    mealId?: StringWithAggregatesFilter | undefined;
    startDate?: DateTimeNullableWithAggregatesFilter | undefined;
    endDate?: DateTimeNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
