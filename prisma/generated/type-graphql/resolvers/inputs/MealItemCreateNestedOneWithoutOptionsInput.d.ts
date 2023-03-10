import { MealItemCreateOrConnectWithoutOptionsInput } from "../inputs/MealItemCreateOrConnectWithoutOptionsInput";
import { MealItemCreateWithoutOptionsInput } from "../inputs/MealItemCreateWithoutOptionsInput";
import { MealItemWhereUniqueInput } from "../inputs/MealItemWhereUniqueInput";
export declare class MealItemCreateNestedOneWithoutOptionsInput {
    create?: MealItemCreateWithoutOptionsInput | undefined;
    connectOrCreate?: MealItemCreateOrConnectWithoutOptionsInput | undefined;
    connect?: MealItemWhereUniqueInput | undefined;
}
