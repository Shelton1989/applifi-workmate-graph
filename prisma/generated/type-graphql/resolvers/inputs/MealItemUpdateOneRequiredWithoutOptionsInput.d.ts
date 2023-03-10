import { MealItemCreateOrConnectWithoutOptionsInput } from "../inputs/MealItemCreateOrConnectWithoutOptionsInput";
import { MealItemCreateWithoutOptionsInput } from "../inputs/MealItemCreateWithoutOptionsInput";
import { MealItemUpdateWithoutOptionsInput } from "../inputs/MealItemUpdateWithoutOptionsInput";
import { MealItemUpsertWithoutOptionsInput } from "../inputs/MealItemUpsertWithoutOptionsInput";
import { MealItemWhereUniqueInput } from "../inputs/MealItemWhereUniqueInput";
export declare class MealItemUpdateOneRequiredWithoutOptionsInput {
    create?: MealItemCreateWithoutOptionsInput | undefined;
    connectOrCreate?: MealItemCreateOrConnectWithoutOptionsInput | undefined;
    upsert?: MealItemUpsertWithoutOptionsInput | undefined;
    connect?: MealItemWhereUniqueInput | undefined;
    update?: MealItemUpdateWithoutOptionsInput | undefined;
}
