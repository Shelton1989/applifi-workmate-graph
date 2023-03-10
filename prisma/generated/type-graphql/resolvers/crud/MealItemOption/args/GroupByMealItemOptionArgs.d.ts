import { MealItemOptionOrderByWithAggregationInput } from "../../../inputs/MealItemOptionOrderByWithAggregationInput";
import { MealItemOptionScalarWhereWithAggregatesInput } from "../../../inputs/MealItemOptionScalarWhereWithAggregatesInput";
import { MealItemOptionWhereInput } from "../../../inputs/MealItemOptionWhereInput";
export declare class GroupByMealItemOptionArgs {
    where?: MealItemOptionWhereInput | undefined;
    orderBy?: MealItemOptionOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "mealItemId" | "title" | "shortDescription" | "createdAt" | "updatedAt">;
    having?: MealItemOptionScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
