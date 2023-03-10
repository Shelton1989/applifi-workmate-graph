import { MealItemCreateOrConnectWithoutOrderLineItemsInput } from "../inputs/MealItemCreateOrConnectWithoutOrderLineItemsInput";
import { MealItemCreateWithoutOrderLineItemsInput } from "../inputs/MealItemCreateWithoutOrderLineItemsInput";
import { MealItemWhereUniqueInput } from "../inputs/MealItemWhereUniqueInput";
export declare class MealItemCreateNestedOneWithoutOrderLineItemsInput {
    create?: MealItemCreateWithoutOrderLineItemsInput | undefined;
    connectOrCreate?: MealItemCreateOrConnectWithoutOrderLineItemsInput | undefined;
    connect?: MealItemWhereUniqueInput | undefined;
}
