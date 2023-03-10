import { MealCreateInput } from "../../../inputs/MealCreateInput";
import { MealUpdateInput } from "../../../inputs/MealUpdateInput";
import { MealWhereUniqueInput } from "../../../inputs/MealWhereUniqueInput";
export declare class UpsertMealArgs {
    where: MealWhereUniqueInput;
    create: MealCreateInput;
    update: MealUpdateInput;
}
