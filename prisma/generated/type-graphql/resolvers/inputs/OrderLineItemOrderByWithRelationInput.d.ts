import { MealItemOptionOrderByWithRelationInput } from "../inputs/MealItemOptionOrderByWithRelationInput";
import { MealItemOrderByWithRelationInput } from "../inputs/MealItemOrderByWithRelationInput";
import { OrderOrderByWithRelationInput } from "../inputs/OrderOrderByWithRelationInput";
export declare class OrderLineItemOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    details?: "asc" | "desc" | undefined;
    comments?: "asc" | "desc" | undefined;
    selectedMealItem?: MealItemOrderByWithRelationInput | undefined;
    mealItemId?: "asc" | "desc" | undefined;
    selectedMealItemOption?: MealItemOptionOrderByWithRelationInput | undefined;
    mealItemOptionId?: "asc" | "desc" | undefined;
    Order?: OrderOrderByWithRelationInput | undefined;
    orderId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
