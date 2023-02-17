import { TransactionCreateManyBookingOrderInputEnvelope } from "../inputs/TransactionCreateManyBookingOrderInputEnvelope";
import { TransactionCreateOrConnectWithoutBookingOrderInput } from "../inputs/TransactionCreateOrConnectWithoutBookingOrderInput";
import { TransactionCreateWithoutBookingOrderInput } from "../inputs/TransactionCreateWithoutBookingOrderInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";
export declare class TransactionCreateNestedManyWithoutBookingOrderInput {
    create?: TransactionCreateWithoutBookingOrderInput[] | undefined;
    connectOrCreate?: TransactionCreateOrConnectWithoutBookingOrderInput[] | undefined;
    createMany?: TransactionCreateManyBookingOrderInputEnvelope | undefined;
    connect?: TransactionWhereUniqueInput[] | undefined;
}
