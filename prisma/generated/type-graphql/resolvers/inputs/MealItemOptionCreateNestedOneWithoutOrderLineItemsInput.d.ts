import { MealItemOptionCreateOrConnectWithoutOrderLineItemsInput } from "../inputs/MealItemOptionCreateOrConnectWithoutOrderLineItemsInput";
import { MealItemOptionCreateWithoutOrderLineItemsInput } from "../inputs/MealItemOptionCreateWithoutOrderLineItemsInput";
import { MealItemOptionWhereUniqueInput } from "../inputs/MealItemOptionWhereUniqueInput";
export declare class MealItemOptionCreateNestedOneWithoutOrderLineItemsInput {
    create?: MealItemOptionCreateWithoutOrderLineItemsInput | undefined;
    connectOrCreate?: MealItemOptionCreateOrConnectWithoutOrderLineItemsInput | undefined;
    connect?: MealItemOptionWhereUniqueInput | undefined;
}
