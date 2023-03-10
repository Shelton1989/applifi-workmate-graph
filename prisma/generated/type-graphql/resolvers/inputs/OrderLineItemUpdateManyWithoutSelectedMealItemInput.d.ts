import { OrderLineItemCreateManySelectedMealItemInputEnvelope } from "../inputs/OrderLineItemCreateManySelectedMealItemInputEnvelope";
import { OrderLineItemCreateOrConnectWithoutSelectedMealItemInput } from "../inputs/OrderLineItemCreateOrConnectWithoutSelectedMealItemInput";
import { OrderLineItemCreateWithoutSelectedMealItemInput } from "../inputs/OrderLineItemCreateWithoutSelectedMealItemInput";
import { OrderLineItemScalarWhereInput } from "../inputs/OrderLineItemScalarWhereInput";
import { OrderLineItemUpdateManyWithWhereWithoutSelectedMealItemInput } from "../inputs/OrderLineItemUpdateManyWithWhereWithoutSelectedMealItemInput";
import { OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemInput } from "../inputs/OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemInput";
import { OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemInput } from "../inputs/OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemInput";
import { OrderLineItemWhereUniqueInput } from "../inputs/OrderLineItemWhereUniqueInput";
export declare class OrderLineItemUpdateManyWithoutSelectedMealItemInput {
    create?: OrderLineItemCreateWithoutSelectedMealItemInput[] | undefined;
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutSelectedMealItemInput[] | undefined;
    upsert?: OrderLineItemUpsertWithWhereUniqueWithoutSelectedMealItemInput[] | undefined;
    createMany?: OrderLineItemCreateManySelectedMealItemInputEnvelope | undefined;
    set?: OrderLineItemWhereUniqueInput[] | undefined;
    disconnect?: OrderLineItemWhereUniqueInput[] | undefined;
    delete?: OrderLineItemWhereUniqueInput[] | undefined;
    connect?: OrderLineItemWhereUniqueInput[] | undefined;
    update?: OrderLineItemUpdateWithWhereUniqueWithoutSelectedMealItemInput[] | undefined;
    updateMany?: OrderLineItemUpdateManyWithWhereWithoutSelectedMealItemInput[] | undefined;
    deleteMany?: OrderLineItemScalarWhereInput[] | undefined;
}
