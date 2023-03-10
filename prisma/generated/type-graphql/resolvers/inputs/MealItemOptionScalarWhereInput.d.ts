import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class MealItemOptionScalarWhereInput {
    AND?: MealItemOptionScalarWhereInput[] | undefined;
    OR?: MealItemOptionScalarWhereInput[] | undefined;
    NOT?: MealItemOptionScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    mealItemId?: StringFilter | undefined;
    title?: StringFilter | undefined;
    shortDescription?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
