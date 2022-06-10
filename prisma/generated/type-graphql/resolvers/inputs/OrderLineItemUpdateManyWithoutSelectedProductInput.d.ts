import { OrderLineItemCreateManySelectedProductInputEnvelope } from "../inputs/OrderLineItemCreateManySelectedProductInputEnvelope";
import { OrderLineItemCreateOrConnectWithoutSelectedProductInput } from "../inputs/OrderLineItemCreateOrConnectWithoutSelectedProductInput";
import { OrderLineItemCreateWithoutSelectedProductInput } from "../inputs/OrderLineItemCreateWithoutSelectedProductInput";
import { OrderLineItemScalarWhereInput } from "../inputs/OrderLineItemScalarWhereInput";
import { OrderLineItemUpdateManyWithWhereWithoutSelectedProductInput } from "../inputs/OrderLineItemUpdateManyWithWhereWithoutSelectedProductInput";
import { OrderLineItemUpdateWithWhereUniqueWithoutSelectedProductInput } from "../inputs/OrderLineItemUpdateWithWhereUniqueWithoutSelectedProductInput";
import { OrderLineItemUpsertWithWhereUniqueWithoutSelectedProductInput } from "../inputs/OrderLineItemUpsertWithWhereUniqueWithoutSelectedProductInput";
import { OrderLineItemWhereUniqueInput } from "../inputs/OrderLineItemWhereUniqueInput";
export declare class OrderLineItemUpdateManyWithoutSelectedProductInput {
    create?: OrderLineItemCreateWithoutSelectedProductInput[] | undefined;
    connectOrCreate?: OrderLineItemCreateOrConnectWithoutSelectedProductInput[] | undefined;
    upsert?: OrderLineItemUpsertWithWhereUniqueWithoutSelectedProductInput[] | undefined;
    createMany?: OrderLineItemCreateManySelectedProductInputEnvelope | undefined;
    set?: OrderLineItemWhereUniqueInput[] | undefined;
    disconnect?: OrderLineItemWhereUniqueInput[] | undefined;
    delete?: OrderLineItemWhereUniqueInput[] | undefined;
    connect?: OrderLineItemWhereUniqueInput[] | undefined;
    update?: OrderLineItemUpdateWithWhereUniqueWithoutSelectedProductInput[] | undefined;
    updateMany?: OrderLineItemUpdateManyWithWhereWithoutSelectedProductInput[] | undefined;
    deleteMany?: OrderLineItemScalarWhereInput[] | undefined;
}
