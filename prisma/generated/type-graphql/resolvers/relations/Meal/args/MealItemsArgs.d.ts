import { MealItemOrderByWithRelationInput } from "../../../inputs/MealItemOrderByWithRelationInput";
import { MealItemWhereInput } from "../../../inputs/MealItemWhereInput";
import { MealItemWhereUniqueInput } from "../../../inputs/MealItemWhereUniqueInput";
export declare class MealItemsArgs {
    where?: MealItemWhereInput | undefined;
    orderBy?: MealItemOrderByWithRelationInput[] | undefined;
    cursor?: MealItemWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "mealIds" | "title" | "shortDescription" | "createdAt" | "updatedAt"> | undefined;
}
