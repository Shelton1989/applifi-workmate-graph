import { WardAvgAggregate } from "../outputs/WardAvgAggregate";
import { WardCountAggregate } from "../outputs/WardCountAggregate";
import { WardMaxAggregate } from "../outputs/WardMaxAggregate";
import { WardMinAggregate } from "../outputs/WardMinAggregate";
import { WardSumAggregate } from "../outputs/WardSumAggregate";
export declare class AggregateWard {
    _count: WardCountAggregate | null;
    _avg: WardAvgAggregate | null;
    _sum: WardSumAggregate | null;
    _min: WardMinAggregate | null;
    _max: WardMaxAggregate | null;
}
