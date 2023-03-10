import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class MealItemOptionScalarWhereWithAggregatesInput {
    AND?: MealItemOptionScalarWhereWithAggregatesInput[] | undefined;
    OR?: MealItemOptionScalarWhereWithAggregatesInput[] | undefined;
    NOT?: MealItemOptionScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    mealItemId?: StringWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    shortDescription?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
