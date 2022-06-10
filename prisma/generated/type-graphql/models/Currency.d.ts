import { Price } from "../models/Price";
import { CurrencyCount } from "../resolvers/outputs/CurrencyCount";
export declare class Currency {
    id: string;
    name: string;
    symbol: string;
    code: string;
    prices?: Price[];
    createdAt: Date;
    updatedAt: Date;
    _count?: CurrencyCount | null;
}
