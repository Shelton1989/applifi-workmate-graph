import { Currency } from "../../../models/Currency";
import { Price } from "../../../models/Price";
import { CurrencyPricesArgs } from "./args/CurrencyPricesArgs";
export declare class CurrencyRelationsResolver {
    prices(currency: Currency, ctx: any, args: CurrencyPricesArgs): Promise<Price[]>;
}
