import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MealItemOptionListRelationFilter } from "../inputs/MealItemOptionListRelationFilter";
import { MealListRelationFilter } from "../inputs/MealListRelationFilter";
import { OrderLineItemListRelationFilter } from "../inputs/OrderLineItemListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class MealItemWhereInput {
    AND?: MealItemWhereInput[] | undefined;
    OR?: MealItemWhereInput[] | undefined;
    NOT?: MealItemWhereInput[] | undefined;
    id?: StringFilter | undefined;
    Meals?: MealListRelationFilter | undefined;
    mealIds?: StringNullableListFilter | undefined;
    title?: StringFilter | undefined;
    shortDescription?: StringFilter | undefined;
    Options?: MealItemOptionListRelationFilter | undefined;
    OrderLineItems?: OrderLineItemListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
