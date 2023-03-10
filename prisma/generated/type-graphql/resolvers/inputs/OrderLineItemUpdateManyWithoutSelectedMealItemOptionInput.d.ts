import { OrderLineItemCreateManySelectedMealItemOptionInputEnvelope } from "../inputs/OrderLineItemCreateManySelectedMealItemOptionInputEnvelope";
import { OrderLineItemCreateOrConnectWithoutSelectedMealItemOptionInput } from "../inputs/OrderLineItemCreateOrConnectWithoutSelectedMealItemOptionInput";
import { OrderLineItemCreateWithoutSelectedMealItemOptionInput } from "../inputs/OrderLineItemCreateWithoutSelectedMealItemOptionInput";
import { OrderLineItemScalarWhereInput } from "../inputs/OrderLineItemScalarWhereInput";
import { OrderLineItemUpdateManyWithWhereWithoutSelectedMealItemOptionInput } from "../inputs/OrderLineItemUpdateManyWithWhereWithoutSelectedMealItemOptionInput";
import { OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemOptionInput } from "../inputs/OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemOptionInput";
import { OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemOptionInput } from "../inputs/OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemOptionInput";
import { OrderLineItemWhereUniqueInput } from "../inputs/OrderLineItemWhereUniqueInput";
export declare class OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput {
    create?: OrderLineItemCreateWithoutSelectedMealItemOptionInput[] | undefined;
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutSelectedMealItemOptionInput[] | undefined;
    upsert?: OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemOptionInput[] | undefined;
    createMany?: OrderLineItemCreateManySelectedMealItemOptionInputEnvelope | undefined;
    set?: OrderLineItemWhereUniqueInput[] | undefined;
    disconnect?: OrderLineItemWhereUniqueInput[] | undefined;
    delete?: OrderLineItemWhereUniqueInput[] | undefined;
    connect?: OrderLineItemWhereUniqueInput[] | undefined;
    update?: OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemOptionInput[] | undefined;
    updateMany?: OrderLineItemUpdateManyWithWhereWithoutSelectedMealItemOptionInput[] | undefined;
    deleteMany?: OrderLineItemScalarWhereInput[] | undefined;
}
