import { MealItemOptionCreateManyMealItemInputEnvelope } from "../inputs/MealItemOptionCreateManyMealItemInputEnvelope";
import { MealItemOptionCreateOrConnectWithoutMealItemInput } from "../inputs/MealItemOptionCreateOrConnectWithoutMealItemInput";
import { MealItemOptionCreateWithoutMealItemInput } from "../inputs/MealItemOptionCreateWithoutMealItemInput";
import { MealItemOptionWhereUniqueInput } from "../inputs/MealItemOptionWhereUniqueInput";
export declare class MealItemOptionCreateNestedManyWithoutMealItemInput {
    create?: MealItemOptionCreateWithoutMealItemInput[] | undefined;
    connectOrCreate?: MealItemOptionCreateOrConnectWithoutMealItemInput[] | undefined;
    createMany?: MealItemOptionCreateManyMealItemInputEnvelope | undefined;
    connect?: MealItemOptionWhereUniqueInput[] | undefined;
}
