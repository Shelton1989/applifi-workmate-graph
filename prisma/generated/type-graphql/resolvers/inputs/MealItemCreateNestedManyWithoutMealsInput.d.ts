import { MealItemCreateOrConnectWithoutMealsInput } from "../inputs/MealItemCreateOrConnectWithoutMealsInput";
import { MealItemCreateWithoutMealsInput } from "../inputs/MealItemCreateWithoutMealsInput";
import { MealItemWhereUniqueInput } from "../inputs/MealItemWhereUniqueInput";
export declare class MealItemCreateNestedManyWithoutMealsInput {
    create?: MealItemCreateWithoutMealsInput[] | undefined;
    connectOrCreate?: MealItemCreateOrConnectWithoutMealsInput[] | undefined;
    connect?: MealItemWhereUniqueInput[] | undefined;
}
