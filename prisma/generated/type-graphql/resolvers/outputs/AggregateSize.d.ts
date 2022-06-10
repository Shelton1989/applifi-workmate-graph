import { SizeCountAggregate } from "../outputs/SizeCountAggregate";
import { SizeMaxAggregate } from "../outputs/SizeMaxAggregate";
import { SizeMinAggregate } from "../outputs/SizeMinAggregate";
export declare class AggregateSize {
    _count: SizeCountAggregate | null;
    _min: SizeMinAggregate | null;
    _max: SizeMaxAggregate | null;
}
