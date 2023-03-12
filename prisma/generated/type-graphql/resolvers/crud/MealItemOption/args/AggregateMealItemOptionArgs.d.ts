import { MealItemOptionOrderByWithRelationInput } from "../../../inputs/MealItemOptionOrderByWithRelationInput";
import { MealItemOptionWhereInput } from "../../../inputs/MealItemOptionWhereInput";
import { MealItemOptionWhereUniqueInput } from "../../../inputs/MealItemOptionWhereUniqueInput";
export declare class AggregateMealItemOptionArgs {
    where?: MealItemOptionWhereInput | undefined;
    orderBy?: MealItemOptionOrderByWithRelationInput[] | undefined;
    cursor?: MealItemOptionWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}