import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class MealItemScalarWhereInput {
    AND?: MealItemScalarWhereInput[] | undefined;
    OR?: MealItemScalarWhereInput[] | undefined;
    NOT?: MealItemScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    mealIds?: StringNullableListFilter | undefined;
    title?: StringFilter | undefined;
    shortDescription?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
