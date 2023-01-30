import { FeaturesCountAggregate } from "../outputs/FeaturesCountAggregate";
import { FeaturesMaxAggregate } from "../outputs/FeaturesMaxAggregate";
import { FeaturesMinAggregate } from "../outputs/FeaturesMinAggregate";
export declare class AggregateFeatures {
    _count: FeaturesCountAggregate | null;
    _min: FeaturesMinAggregate | null;
    _max: FeaturesMaxAggregate | null;
}
