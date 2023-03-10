import { MealItemOptionCreateManyMealItemInputEnvelope } from "../inputs/MealItemOptionCreateManyMealItemInputEnvelope";
import { MealItemOptionCreateOrConnectWithoutMealItemInput } from "../inputs/MealItemOptionCreateOrConnectWithoutMealItemInput";
import { MealItemOptionCreateWithoutMealItemInput } from "../inputs/MealItemOptionCreateWithoutMealItemInput";
import { MealItemOptionScalarWhereInput } from "../inputs/MealItemOptionScalarWhereInput";
import { MealItemOptionUpdateManyWithWhereWithoutMealItemInput } from "../inputs/MealItemOptionUpdateManyWithWhereWithoutMealItemInput";
import { MealItemOptionUpdateWithWhereUniqueWithoutMealItemInput } from "../inputs/MealItemOptionUpdateWithWhereUniqueWithoutMealItemInput";
import { MealItemOptionUpsertWithWhereUniqueWithoutMealItemInput } from "../inputs/MealItemOptionUpsertWithWhereUniqueWithoutMealItemInput";
import { MealItemOptionWhereUniqueInput } from "../inputs/MealItemOptionWhereUniqueInput";
export declare class MealItemOptionUpdateManyWithoutMealItemInput {
    create?: MealItemOptionCreateWithoutMealItemInput[] | undefined;
    connectOrCreate?: MealItemOptionCreateOrConnectWithoutMealItemInput[] | undefined;
    upsert?: MealItemOptionUpsertWithWhereUniqueWithoutMealItemInput[] | undefined;
    createMany?: MealItemOptionCreateManyMealItemInputEnvelope | undefined;
    set?: MealItemOptionWhereUniqueInput[] | undefined;
    disconnect?: MealItemOptionWhereUniqueInput[] | undefined;
    delete?: MealItemOptionWhereUniqueInput[] | undefined;
    connect?: MealItemOptionWhereUniqueInput[] | undefined;
    update?: MealItemOptionUpdateWithWhereUniqueWithoutMealItemInput[] | undefined;
    updateMany?: MealItemOptionUpdateManyWithWhereWithoutMealItemInput[] | undefined;
    deleteMany?: MealItemOptionScalarWhereInput[] | undefined;
}
