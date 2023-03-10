import { WardAvgAggregate } from "../outputs/WardAvgAggregate";
import { WardCountAggregate } from "../outputs/WardCountAggregate";
import { WardMaxAggregate } from "../outputs/WardMaxAggregate";
import { WardMinAggregate } from "../outputs/WardMinAggregate";
import { WardSumAggregate } from "../outputs/WardSumAggregate";
export declare class WardGroupBy {
    id: string;
    number: number;
    name: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: WardCountAggregate | null;
    _avg: WardAvgAggregate | null;
    _sum: WardSumAggregate | null;
    _min: WardMinAggregate | null;
    _max: WardMaxAggregate | null;
}
