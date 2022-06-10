import { OrderCreateManySelectedShippingAddressInputEnvelope } from "../inputs/OrderCreateManySelectedShippingAddressInputEnvelope";
import { OrderCreateOrConnectWithoutSelectedShippingAddressInput } from "../inputs/OrderCreateOrConnectWithoutSelectedShippingAddressInput";
import { OrderCreateWithoutSelectedShippingAddressInput } from "../inputs/OrderCreateWithoutSelectedShippingAddressInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutSelectedShippingAddressInput } from "../inputs/OrderUpdateManyWithWhereWithoutSelectedShippingAddressInput";
import { OrderUpdateWithWhereUniqueWithoutSelectedShippingAddressInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutSelectedShippingAddressInput";
import { OrderUpsertWithWhereUniqueWithoutSelectedShippingAddressInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutSelectedShippingAddressInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpdateManyWithoutSelectedShippingAddressInput {
    create?: OrderCreateWithoutSelectedShippingAddressInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutSelectedShippingAddressInput[] | undefined;
    upsert?: OrderUpsertWithWhereUniqueWithoutSelectedShippingAddressInput[] | undefined;
    createMany?: OrderCreateManySelectedShippingAddressInputEnvelope | undefined;
    set?: OrderWhereUniqueInput[] | undefined;
    disconnect?: OrderWhereUniqueInput[] | undefined;
    delete?: OrderWhereUniqueInput[] | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
    update?: OrderUpdateWithWhereUniqueWithoutSelectedShippingAddressInput[] | undefined;
    updateMany?: OrderUpdateManyWithWhereWithoutSelectedShippingAddressInput[] | undefined;
    deleteMany?: OrderScalarWhereInput[] | undefined;
}
