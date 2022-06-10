import { CurrencyCountAggregate } from "../outputs/CurrencyCountAggregate";
import { CurrencyMaxAggregate } from "../outputs/CurrencyMaxAggregate";
import { CurrencyMinAggregate } from "../outputs/CurrencyMinAggregate";
export declare class AggregateCurrency {
    _count: CurrencyCountAggregate | null;
    _min: CurrencyMinAggregate | null;
    _max: CurrencyMaxAggregate | null;
}
