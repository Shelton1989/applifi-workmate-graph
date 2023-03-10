import { MealItemOrderByWithAggregationInput } from "../../../inputs/MealItemOrderByWithAggregationInput";
import { MealItemScalarWhereWithAggregatesInput } from "../../../inputs/MealItemScalarWhereWithAggregatesInput";
import { MealItemWhereInput } from "../../../inputs/MealItemWhereInput";
export declare class GroupByMealItemArgs {
    where?: MealItemWhereInput | undefined;
    orderBy?: MealItemOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "mealIds" | "title" | "shortDescription" | "createdAt" | "updatedAt">;
    having?: MealItemScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
