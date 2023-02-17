import { CurrencyCreateOrConnectWithoutTransactionsInput } from "../inputs/CurrencyCreateOrConnectWithoutTransactionsInput";
import { CurrencyCreateWithoutTransactionsInput } from "../inputs/CurrencyCreateWithoutTransactionsInput";
import { CurrencyUpdateWithoutTransactionsInput } from "../inputs/CurrencyUpdateWithoutTransactionsInput";
import { CurrencyUpsertWithoutTransactionsInput } from "../inputs/CurrencyUpsertWithoutTransactionsInput";
import { CurrencyWhereUniqueInput } from "../inputs/CurrencyWhereUniqueInput";
export declare class CurrencyUpdateOneWithoutTransactionsInput {
    create?: CurrencyCreateWithoutTransactionsInput | undefined;
    connectOrCreate?: CurrencyCreateOrConnectWithoutTransactionsInput | undefined;
    upsert?: CurrencyUpsertWithoutTransactionsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: CurrencyWhereUniqueInput | undefined;
    update?: CurrencyUpdateWithoutTransactionsInput | undefined;
}
