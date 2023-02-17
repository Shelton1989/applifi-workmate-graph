import { CurrencyCreateOrConnectWithoutTransactionsInput } from "../inputs/CurrencyCreateOrConnectWithoutTransactionsInput";
import { CurrencyCreateWithoutTransactionsInput } from "../inputs/CurrencyCreateWithoutTransactionsInput";
import { CurrencyWhereUniqueInput } from "../inputs/CurrencyWhereUniqueInput";
export declare class CurrencyCreateNestedOneWithoutTransactionsInput {
    create?: CurrencyCreateWithoutTransactionsInput | undefined;
    connectOrCreate?: CurrencyCreateOrConnectWithoutTransactionsInput | undefined;
    connect?: CurrencyWhereUniqueInput | undefined;
}
