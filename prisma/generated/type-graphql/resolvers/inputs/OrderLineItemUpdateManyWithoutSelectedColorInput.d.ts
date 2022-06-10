import { OrderLineItemCreateManySelectedColorInputEnvelope } from "../inputs/OrderLineItemCreateManySelectedColorInputEnvelope";
import { OrderLineItemCreateOrConnectWithoutSelectedColorInput } from "../inputs/OrderLineItemCreateOrConnectWithoutSelectedColorInput";
import { OrderLineItemCreateWithoutSelectedColorInput } from "../inputs/OrderLineItemCreateWithoutSelectedColorInput";
import { OrderLineItemScalarWhereInput } from "../inputs/OrderLineItemScalarWhereInput";
import { OrderLineItemUpdateManyWithWhereWithoutSelectedColorInput } from "../inputs/OrderLineItemUpdateManyWithWhereWithoutSelectedColorInput";
import { OrderLineItemUpdateWithWhereUniqueWithoutSelectedColorInput } from "../inputs/OrderLineItemUpdateWithWhereUniqueWithoutSelectedColorInput";
import { OrderLineItemUpsertWithWhereUniqueWithoutSelectedColorInput } from "../inputs/OrderLineItemUpsertWithWhereUniqueWithoutSelectedColorInput";
import { OrderLineItemWhereUniqueInput } from "../inputs/OrderLineItemWhereUniqueInput";
export declare class OrderLineItemUpdateManyWithoutSelectedColorInput {
    create?: OrderLineItemCreateWithoutSelectedColorInput[] | undefined;
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutSelectedColorInput[] | undefined;
    upsert?: OrderLineItemUpsertWithWhereUniqueWithoutSelectedColorInput[] | undefined;
    createMany?: OrderLineItemCreateManySelectedColorInputEnvelope | undefined;
    set?: OrderLineItemWhereUniqueInput[] | undefined;
    disconnect?: OrderLineItemWhereUniqueInput[] | undefined;
    delete?: OrderLineItemWhereUniqueInput[] | undefined;
    connect?: OrderLineItemWhereUniqueInput[] | undefined;
    update?: OrderLineItemUpdateWithWhereUniqueWithoutSelectedColorInput[] | undefined;
    updateMany?: OrderLineItemUpdateManyWithWhereWithoutSelectedColorInput[] | undefined;
    deleteMany?: OrderLineItemScalarWhereInput[] | undefined;
}
