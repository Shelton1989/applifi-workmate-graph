import { PriceAvgAggregate } from "../outputs/PriceAvgAggregate";
import { PriceCountAggregate } from "../outputs/PriceCountAggregate";
import { PriceMaxAggregate } from "../outputs/PriceMaxAggregate";
import { PriceMinAggregate } from "../outputs/PriceMinAggregate";
import { PriceSumAggregate } from "../outputs/PriceSumAggregate";
export declare class PriceGroupBy {
    id: string;
    priceInLowestDenomination: number;
    displayPrice: string;
    currencyId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: PriceCountAggregate | null;
    _avg: PriceAvgAggregate | null;
    _sum: PriceSumAggregate | null;
    _min: PriceMinAggregate | null;
    _max: PriceMaxAggregate | null;
}
