import { TransactionCreateNestedManyWithoutCurrencyInput } from "../inputs/TransactionCreateNestedManyWithoutCurrencyInput";
export declare class CurrencyCreateWithoutPricesInput {
    id?: string | undefined;
    name: string;
    symbol: string;
    code: string;
    Transactions?: TransactionCreateNestedManyWithoutCurrencyInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
