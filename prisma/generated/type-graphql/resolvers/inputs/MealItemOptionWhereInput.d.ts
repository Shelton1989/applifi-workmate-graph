import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MealItemRelationFilter } from "../inputs/MealItemRelationFilter";
import { OrderLineItemListRelationFilter } from "../inputs/OrderLineItemListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class MealItemOptionWhereInput {
    AND?: MealItemOptionWhereInput[] | undefined;
    OR?: MealItemOptionWhereInput[] | undefined;
    NOT?: MealItemOptionWhereInput[] | undefined;
    id?: StringFilter | undefined;
    MealItem?: MealItemRelationFilter | undefined;
    mealItemId?: StringFilter | undefined;
    title?: StringFilter | undefined;
    shortDescription?: StringFilter | undefined;
    OrderLineItems?: OrderLineItemListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
