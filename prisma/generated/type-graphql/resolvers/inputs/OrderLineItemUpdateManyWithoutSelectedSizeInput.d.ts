import { OrderLineItemCreateManySelectedSizeInputEnvelope } from "../inputs/OrderLineItemCreateManySelectedSizeInputEnvelope";
import { OrderLineItemCreateOrConnectWithoutSelectedSizeInput } from "../inputs/OrderLineItemCreateOrConnectWithoutSelectedSizeInput";
import { OrderLineItemCreateWithoutSelectedSizeInput } from "../inputs/OrderLineItemCreateWithoutSelectedSizeInput";
import { OrderLineItemScalarWhereInput } from "../inputs/OrderLineItemScalarWhereInput";
import { OrderLineItemUpdateManyWithWhereWithoutSelectedSizeInput } from "../inputs/OrderLineItemUpdateManyWithWhereWithoutSelectedSizeInput";
import { OrderLineItemUpdateWithWhereUniqueWithoutSelectedSizeInput } from "../inputs/OrderLineItemUpdateWithWhereUniqueWithoutSelectedSizeInput";
import { OrderLineItemUpsertWithWhereUniqueWithoutSelectedSizeInput } from "../inputs/OrderLineItemUpsertWithWhereUniqueWithoutSelectedSizeInput";
import { OrderLineItemWhereUniqueInput } from "../inputs/OrderLineItemWhereUniqueInput";
export declare class OrderLineItemUpdateManyWithoutSelectedSizeInput {
    create?: OrderLineItemCreateWithoutSelectedSizeInput[] | undefined;
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutSelectedSizeInput[] | undefined;
    upsert?: OrderLineItemUpsertWithWhereUniqueWithoutSelectedSizeInput[] | undefined;
    createMany?: OrderLineItemCreateManySelectedSizeInputEnvelope | undefined;
    set?: OrderLineItemWhereUniqueInput[] | undefined;
    disconnect?: OrderLineItemWhereUniqueInput[] | undefined;
    delete?: OrderLineItemWhereUniqueInput[] | undefined;
    connect?: OrderLineItemWhereUniqueInput[] | undefined;
    update?: OrderLineItemUpdateWithWhereUniqueWithoutSelectedSizeInput[] | undefined;
    updateMany?: OrderLineItemUpdateManyWithWhereWithoutSelectedSizeInput[] | undefined;
    deleteMany?: OrderLineItemScalarWhereInput[] | undefined;
}
