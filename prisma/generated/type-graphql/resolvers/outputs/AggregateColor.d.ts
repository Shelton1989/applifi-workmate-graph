import { ColorCountAggregate } from "../outputs/ColorCountAggregate";
import { ColorMaxAggregate } from "../outputs/ColorMaxAggregate";
import { ColorMinAggregate } from "../outputs/ColorMinAggregate";
export declare class AggregateColor {
    _count: ColorCountAggregate | null;
    _min: ColorMinAggregate | null;
    _max: ColorMaxAggregate | null;
}
