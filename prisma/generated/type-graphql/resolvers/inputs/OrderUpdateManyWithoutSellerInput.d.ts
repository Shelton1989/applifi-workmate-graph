import { OrderCreateManySellerInputEnvelope } from "../inputs/OrderCreateManySellerInputEnvelope";
import { OrderCreateOrConnectWithoutSellerInput } from "../inputs/OrderCreateOrConnectWithoutSellerInput";
import { OrderCreateWithoutSellerInput } from "../inputs/OrderCreateWithoutSellerInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutSellerInput } from "../inputs/OrderUpdateManyWithWhereWithoutSellerInput";
import { OrderUpdateWithWhereUniqueWithoutSellerInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutSellerInput";
import { OrderUpsertWithWhereUniqueWithoutSellerInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutSellerInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";
export declare class OrderUpdateManyWithoutSellerInput {
    create?: OrderCreateWithoutSellerInput[] | undefined;
    connectOrCreate?: OrderCreateOrConnectWithoutSellerInput[] | undefined;
    upsert?: OrderUpsertWithWhereUniqueWithoutSellerInput[] | undefined;
    createMany?: OrderCreateManySellerInputEnvelope | undefined;
    set?: OrderWhereUniqueInput[] | undefined;
    disconnect?: OrderWhereUniqueInput[] | undefined;
    delete?: OrderWhereUniqueInput[] | undefined;
    connect?: OrderWhereUniqueInput[] | undefined;
    update?: OrderUpdateWithWhereUniqueWithoutSellerInput[] | undefined;
    updateMany?: OrderUpdateManyWithWhereWithoutSellerInput[] | undefined;
    deleteMany?: OrderScalarWhereInput[] | undefined;
}
