import { Price } from "../models/Price";
import { Transaction } from "../models/Transaction";
import { CurrencyCount } from "../resolvers/outputs/CurrencyCount";
export declare class Currency {
    id: string;
    name: string;
    symbol: string;
    code: string;
    prices?: Price[];
    Transactions?: Transaction[];
    createdAt: Date;
    updatedAt: Date;
    _count?: CurrencyCount | null;
}
