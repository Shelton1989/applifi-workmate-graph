import { Currency } from "../../../models/Currency";
import { Price } from "../../../models/Price";
import { Transaction } from "../../../models/Transaction";
import { CurrencyPricesArgs } from "./args/CurrencyPricesArgs";
import { CurrencyTransactionsArgs } from "./args/CurrencyTransactionsArgs";
export declare class CurrencyRelationsResolver {
    prices(currency: Currency, ctx: any, args: CurrencyPricesArgs): Promise<Price[]>;
    Transactions(currency: Currency, ctx: any, args: CurrencyTransactionsArgs): Promise<Transaction[]>;
}
