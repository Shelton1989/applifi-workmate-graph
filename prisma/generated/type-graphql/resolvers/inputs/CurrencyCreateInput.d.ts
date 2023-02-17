import { PriceCreateNestedManyWithoutCurrencyInput } from "../inputs/PriceCreateNestedManyWithoutCurrencyInput";
import { TransactionCreateNestedManyWithoutCurrencyInput } from "../inputs/TransactionCreateNestedManyWithoutCurrencyInput";
export declare class CurrencyCreateInput {
    id?: string | undefined;
    name: string;
    symbol: string;
    code: string;
    prices?: PriceCreateNestedManyWithoutCurrencyInput | undefined;
    Transactions?: TransactionCreateNestedManyWithoutCurrencyInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
