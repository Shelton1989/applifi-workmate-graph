import { TransactionCreateManyCurrencyInputEnvelope } from "../inputs/TransactionCreateManyCurrencyInputEnvelope";
import { TransactionCreateOrConnectWithoutCurrencyInput } from "../inputs/TransactionCreateOrConnectWithoutCurrencyInput";
import { TransactionCreateWithoutCurrencyInput } from "../inputs/TransactionCreateWithoutCurrencyInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";
export declare class TransactionCreateNestedManyWithoutCurrencyInput {
    create?: TransactionCreateWithoutCurrencyInput[] | undefined;
    connectOrCreate?: TransactionCreateOrConnectWithoutCurrencyInput[] | undefined;
    createMany?: TransactionCreateManyCurrencyInputEnvelope | undefined;
    connect?: TransactionWhereUniqueInput[] | undefined;
}
