import { MealItemCreateOrConnectWithoutOrderLineItemsInput } from "../inputs/MealItemCreateOrConnectWithoutOrderLineItemsInput";
import { MealItemCreateWithoutOrderLineItemsInput } from "../inputs/MealItemCreateWithoutOrderLineItemsInput";
import { MealItemUpdateWithoutOrderLineItemsInput } from "../inputs/MealItemUpdateWithoutOrderLineItemsInput";
import { MealItemUpsertWithoutOrderLineItemsInput } from "../inputs/MealItemUpsertWithoutOrderLineItemsInput";
import { MealItemWhereUniqueInput } from "../inputs/MealItemWhereUniqueInput";
export declare class MealItemUpdateOneWithoutOrderLineItemsInput {
    create?: MealItemCreateWithoutOrderLineItemsInput | undefined;
    connectOrCreate?: MealItemCreateOrConnectWithoutOrderLineItemsInput | undefined;
    upsert?: MealItemUpsertWithoutOrderLineItemsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: MealItemWhereUniqueInput | undefined;
    update?: MealItemUpdateWithoutOrderLineItemsInput | undefined;
}
