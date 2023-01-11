import { CurrencyCountAggregate } from "../outputs/CurrencyCountAggregate";
import { CurrencyMaxAggregate } from "../outputs/CurrencyMaxAggregate";
import { CurrencyMinAggregate } from "../outputs/CurrencyMinAggregate";
export declare class CurrencyGroupBy {
    id: string;
    name: string;
    symbol: string;
    code: string;
    createdAt: Date;
    updatedAt: Date;
    _count: CurrencyCountAggregate | null;
    _min: CurrencyMinAggregate | null;
    _max: CurrencyMaxAggregate | null;
}
