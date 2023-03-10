import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class MealItemScalarWhereWithAggregatesInput {
    AND?: MealItemScalarWhereWithAggregatesInput[] | undefined;
    OR?: MealItemScalarWhereWithAggregatesInput[] | undefined;
    NOT?: MealItemScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    mealIds?: StringNullableListFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    shortDescription?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
