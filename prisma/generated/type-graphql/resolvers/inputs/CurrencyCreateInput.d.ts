import { PriceCreateNestedManyWithoutCurrencyInput } from "../inputs/PriceCreateNestedManyWithoutCurrencyInput";
export declare class CurrencyCreateInput {
    id?: string | undefined;
    name: string;
    symbol: string;
    code: string;
    prices?: PriceCreateNestedManyWithoutCurrencyInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
