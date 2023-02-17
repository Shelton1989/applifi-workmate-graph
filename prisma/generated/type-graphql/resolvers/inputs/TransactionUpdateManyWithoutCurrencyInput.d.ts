import { TransactionCreateManyCurrencyInputEnvelope } from "../inputs/TransactionCreateManyCurrencyInputEnvelope";
import { TransactionCreateOrConnectWithoutCurrencyInput } from "../inputs/TransactionCreateOrConnectWithoutCurrencyInput";
import { TransactionCreateWithoutCurrencyInput } from "../inputs/TransactionCreateWithoutCurrencyInput";
import { TransactionScalarWhereInput } from "../inputs/TransactionScalarWhereInput";
import { TransactionUpdateManyWithWhereWithoutCurrencyInput } from "../inputs/TransactionUpdateManyWithWhereWithoutCurrencyInput";
import { TransactionUpdateWithWhereUniqueWithoutCurrencyInput } from "../inputs/TransactionUpdateWithWhereUniqueWithoutCurrencyInput";
import { TransactionUpsertWithWhereUniqueWithoutCurrencyInput } from "../inputs/TransactionUpsertWithWhereUniqueWithoutCurrencyInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";
export declare class TransactionUpdateManyWithoutCurrencyInput {
    create?: TransactionCreateWithoutCurrencyInput[] | undefined;
    connectOrCreate?: TransactionCreateOrConnectWithoutCurrencyInput[] | undefined;
    upsert?: TransactionUpsertWithWhereUniqueWithoutCurrencyInput[] | undefined;
    createMany?: TransactionCreateManyCurrencyInputEnvelope | undefined;
    set?: TransactionWhereUniqueInput[] | undefined;
    disconnect?: TransactionWhereUniqueInput[] | undefined;
    delete?: TransactionWhereUniqueInput[] | undefined;
    connect?: TransactionWhereUniqueInput[] | undefined;
    update?: TransactionUpdateWithWhereUniqueWithoutCurrencyInput[] | undefined;
    updateMany?: TransactionUpdateManyWithWhereWithoutCurrencyInput[] | undefined;
    deleteMany?: TransactionScalarWhereInput[] | undefined;
}
