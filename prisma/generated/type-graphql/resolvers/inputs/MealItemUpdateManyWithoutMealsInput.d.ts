import { MealItemCreateOrConnectWithoutMealsInput } from "../inputs/MealItemCreateOrConnectWithoutMealsInput";
import { MealItemCreateWithoutMealsInput } from "../inputs/MealItemCreateWithoutMealsInput";
import { MealItemScalarWhereInput } from "../inputs/MealItemScalarWhereInput";
import { MealItemUpdateManyWithWhereWithoutMealsInput } from "../inputs/MealItemUpdateManyWithWhereWithoutMealsInput";
import { MealItemUpdateWithWhereUniqueWithoutMealsInput } from "../inputs/MealItemUpdateWithWhereUniqueWithoutMealsInput";
import { MealItemUpsertWithWhereUniqueWithoutMealsInput } from "../inputs/MealItemUpsertWithWhereUniqueWithoutMealsInput";
import { MealItemWhereUniqueInput } from "../inputs/MealItemWhereUniqueInput";
export declare class MealItemUpdateManyWithoutMealsInput {
    create?: MealItemCreateWithoutMealsInput[] | undefined;
    connectOrCreate?: MealItemCreateOrConnectWithoutMealsInput[] | undefined;
    upsert?: MealItemUpsertWithWhereUniqueWithoutMealsInput[] | undefined;
    set?: MealItemWhereUniqueInput[] | undefined;
    disconnect?: MealItemWhereUniqueInput[] | undefined;
    delete?: MealItemWhereUniqueInput[] | undefined;
    connect?: MealItemWhereUniqueInput[] | undefined;
    update?: MealItemUpdateWithWhereUniqueWithoutMealsInput[] | undefined;
    updateMany?: MealItemUpdateManyWithWhereWithoutMealsInput[] | undefined;
    deleteMany?: MealItemScalarWhereInput[] | undefined;
}
