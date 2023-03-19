import { OrderLineItemCreateManyOrderInputEnvelope } from "../inputs/OrderLineItemCreateManyOrderInputEnvelope";
import { OrderLineItemCreateOrConnectWithoutOrderInput } from "../inputs/OrderLineItemCreateOrConnectWithoutOrderInput";
import { OrderLineItemCreateWithoutOrderInput } from "../inputs/OrderLineItemCreateWithoutOrderInput";
import { OrderLineItemScalarWhereInput } from "../inputs/OrderLineItemScalarWhereInput";
import { OrderLineItemUpdateManyWithWhereWithoutOrderInput } from "../inputs/OrderLineItemUpdateManyWithWhereWithoutOrderInput";
import { OrderLineItemUpdateWithWhereUniqueWithoutOrderInput } from "../inputs/OrderLineItemUpdateWithWhereUniqueWithoutOrderInput";
import { OrderLineItemUpsertWithWhereUniqueWithoutOrderInput } from "../inputs/OrderLineItemUpsertWithWhereUniqueWithoutOrderInput";
import { OrderLineItemWhereUniqueInput } from "../inputs/OrderLineItemWhereUniqueInput";
export declare class OrderLineItemUpdateManyWithoutOrderInput {
    create?: OrderLineItemCreateWithoutOrderInput[] | undefined;
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutOrderInput[] | undefined;
    upsert?: OrderLineItemUpsertWithWhereUniqueWithoutOrderInput[] | undefined;
    createMany?: OrderLineItemCreateManyOrderInputEnvelope | undefined;
    set?: OrderLineItemWhereUniqueInput[] | undefined;
    disconnect?: OrderLineItemWhereUniqueInput[] | undefined;
    delete?: OrderLineItemWhereUniqueInput[] | undefined;
    connect?: OrderLineItemWhereUniqueInput[] | undefined;
    update?: OrderLineItemUpdateWithWhereUniqueWithoutOrderInput[] | undefined;
    updateMany?: OrderLineItemUpdateManyWithWhereWithoutOrderInput[] | undefined;
    deleteMany?: OrderLineItemScalarWhereInput[] | undefined;
}
