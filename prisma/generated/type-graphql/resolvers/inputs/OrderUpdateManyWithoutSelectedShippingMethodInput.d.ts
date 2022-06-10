import { OrderCreateManySelectedShippingMethodInputEnvelope } from "../inputs/OrderCreateManySelectedShippingMethodInputEnvelope";
import { OrderCreateOrConnectWithoutSelectedShippingMethodInput } from "../inputs/OrderCreateOrConnectWithoutSelectedShippingMethodInput";
import { OrderCreateWithoutSelectedShippingMethodInput } from "../inputs/OrderCreateWithoutSelectedShippingMethodInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutSelectedShippingMethodInput } from "../inputs/OrderUpdateManyWithWhereWithoutSelectedShippingMethodInput";
import { OrderUpdateWithWhereUniqueWithoutSelectedShippingMethodInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutSelectedShippingMethodInput";
import { OrderUpsertWithWhereUniqueWithoutSelectedShippingMethodInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutSelectedShippingMethodInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpdateManyWithoutSelectedShippingMethodInput {
    create?: OrderCreateWithoutSelectedShippingMethodInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutSelectedShippingMethodInput[] | undefined;
    upsert?: OrderUpsertWithWhereUniqueWithoutSelectedShippingMethodInput[] | undefined;
    createMany?: OrderCreateManySelectedShippingMethodInputEnvelope | undefined;
    set?: OrderWhereUniqueInput[] | undefined;
    disconnect?: OrderWhereUniqueInput[] | undefined;
    delete?: OrderWhereUniqueInput[] | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
    update?: OrderUpdateWithWhereUniqueWithoutSelectedShippingMethodInput[] | undefined;
    updateMany?: OrderUpdateManyWithWhereWithoutSelectedShippingMethodInput[] | undefined;
    deleteMany?: OrderScalarWhereInput[] | undefined;
}
