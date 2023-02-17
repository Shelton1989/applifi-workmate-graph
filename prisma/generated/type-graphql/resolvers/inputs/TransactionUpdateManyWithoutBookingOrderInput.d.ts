import { TransactionCreateManyBookingOrderInputEnvelope } from "../inputs/TransactionCreateManyBookingOrderInputEnvelope";
import { TransactionCreateOrConnectWithoutBookingOrderInput } from "../inputs/TransactionCreateOrConnectWithoutBookingOrderInput";
import { TransactionCreateWithoutBookingOrderInput } from "../inputs/TransactionCreateWithoutBookingOrderInput";
import { TransactionScalarWhereInput } from "../inputs/TransactionScalarWhereInput";
import { TransactionUpdateManyWithWhereWithoutBookingOrderInput } from "../inputs/TransactionUpdateManyWithWhereWithoutBookingOrderInput";
import { TransactionUpdateWithWhereUniqueWithoutBookingOrderInput } from "../inputs/TransactionUpdateWithWhereUniqueWithoutBookingOrderInput";
import { TransactionUpsertWithWhereUniqueWithoutBookingOrderInput } from "../inputs/TransactionUpsertWithWhereUniqueWithoutBookingOrderInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";
export declare class TransactionUpdateManyWithoutBookingOrderInput {
    create?: TransactionCreateWithoutBookingOrderInput[] | undefined;
    connectOrCreate?: TransactionCreateOrConnectWithoutBookingOrderInput[] | undefined;
    upsert?: TransactionUpsertWithWhereUniqueWithoutBookingOrderInput[] | undefined;
    createMany?: TransactionCreateManyBookingOrderInputEnvelope | undefined;
    set?: TransactionWhereUniqueInput[] | undefined;
    disconnect?: TransactionWhereUniqueInput[] | undefined;
    delete?: TransactionWhereUniqueInput[] | undefined;
    connect?: TransactionWhereUniqueInput[] | undefined;
    update?: TransactionUpdateWithWhereUniqueWithoutBookingOrderInput[] | undefined;
    updateMany?: TransactionUpdateManyWithWhereWithoutBookingOrderInput[] | undefined;
    deleteMany?: TransactionScalarWhereInput[] | undefined;
}
