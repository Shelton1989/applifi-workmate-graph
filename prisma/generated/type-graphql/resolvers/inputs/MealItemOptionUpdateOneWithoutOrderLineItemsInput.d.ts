import { MealItemOptionCreateOrConnectWithoutOrderLineItemsInput } from "../inputs/MealItemOptionCreateOrConnectWithoutOrderLineItemsInput";
import { MealItemOptionCreateWithoutOrderLineItemsInput } from "../inputs/MealItemOptionCreateWithoutOrderLineItemsInput";
import { MealItemOptionUpdateWithoutOrderLineItemsInput } from "../inputs/MealItemOptionUpdateWithoutOrderLineItemsInput";
import { MealItemOptionUpsertWithoutOrderLineItemsInput } from "../inputs/MealItemOptionUpsertWithoutOrderLineItemsInput";
import { MealItemOptionWhereUniqueInput } from "../inputs/MealItemOptionWhereUniqueInput";
export declare class MealItemOptionUpdateOneWithoutOrderLineItemsInput {
    create?: MealItemOptionCreateWithoutOrderLineItemsInput | undefined;
    connectOrCreate?: MealItemOptionCreateOrConnectWithoutOrderLineItemsInput | undefined;
    upsert?: MealItemOptionUpsertWithoutOrderLineItemsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: MealItemOptionWhereUniqueInput | undefined;
    update?: MealItemOptionUpdateWithoutOrderLineItemsInput | undefined;
}
