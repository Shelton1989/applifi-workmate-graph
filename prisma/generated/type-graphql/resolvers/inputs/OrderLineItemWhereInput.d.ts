import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { MealItemOptionRelationFilter } from "../inputs/MealItemOptionRelationFilter";
import { MealItemRelationFilter } from "../inputs/MealItemRelationFilter";
import { OrderRelationFilter } from "../inputs/OrderRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class OrderLineItemWhereInput {
    AND?: OrderLineItemWhereInput[] | undefined;
    OR?: OrderLineItemWhereInput[] | undefined;
    NOT?: OrderLineItemWhereInput[] | undefined;
    id?: StringFilter | undefined;
    details?: StringNullableFilter | undefined;
    comments?: StringNullableFilter | undefined;
    selectedMealItem?: MealItemRelationFilter | undefined;
    mealItemId?: StringNullableFilter | undefined;
    selectedMealItemOption?: MealItemOptionRelationFilter | undefined;
    mealItemOptionId?: StringNullableFilter | undefined;
    Booking?: OrderRelationFilter | undefined;
    bookingId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
