import { MealItemCreateInput } from "../../../inputs/MealItemCreateInput";
import { MealItemUpdateInput } from "../../../inputs/MealItemUpdateInput";
import { MealItemWhereUniqueInput } from "../../../inputs/MealItemWhereUniqueInput";
export declare class UpsertMealItemArgs {
    where: MealItemWhereUniqueInput;
    create: MealItemCreateInput;
    update: MealItemUpdateInput;
}
