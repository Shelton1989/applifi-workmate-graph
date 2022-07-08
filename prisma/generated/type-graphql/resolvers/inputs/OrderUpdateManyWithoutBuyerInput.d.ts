import { OrderCreateManyBuyerInputEnvelope } from "../inputs/OrderCreateManyBuyerInputEnvelope";
import { OrderCreateOrConnectWithoutBuyerInput } from "../inputs/OrderCreateOrConnectWithoutBuyerInput";
import { OrderCreateWithoutBuyerInput } from "../inputs/OrderCreateWithoutBuyerInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutBuyerInput } from "../inputs/OrderUpdateManyWithWhereWithoutBuyerInput";
import { OrderUpdateWithWhereUniqueWithoutBuyerInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutBuyerInput";
import { OrderUpsertWithWhereUniqueWithoutBuyerInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutBuyerInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpdateManyWithoutBuyerInput {
    create?: OrderCreateWithoutBuyerInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput[] | undefined;
    upsert?: OrderUpsertWithWhereUniqueWithoutBuyerInput[] | undefined;
    createMany?: OrderCreateManyBuyerInputEnvelope | undefined;
    set?: OrderWhereUniqueInput[] | undefined;
    disconnect?: OrderWhereUniqueInput[] | undefined;
    delete?: OrderWhereUniqueInput[] | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
    update?: OrderUpdateWithWhereUniqueWithoutBuyerInput[] | undefined;
    updateMany?: OrderUpdateManyWithWhereWithoutBuyerInput[] | undefined;
    deleteMany?: OrderScalarWhereInput[] | undefined;
}
