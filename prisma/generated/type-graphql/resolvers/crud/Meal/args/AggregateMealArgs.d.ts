import { MealOrderByWithRelationInput } from "../../../inputs/MealOrderByWithRelationInput";
import { MealWhereInput } from "../../../inputs/MealWhereInput";
import { MealWhereUniqueInput } from "../../../inputs/MealWhereUniqueInput";
export declare class AggregateMealArgs {
    where?: MealWhereInput | undefined;
    orderBy?: MealOrderByWithRelationInput[] | undefined;
    cursor?: MealWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
