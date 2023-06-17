import { ProductKeyCountAggregate } from "../outputs/ProductKeyCountAggregate";
import { ProductKeyMaxAggregate } from "../outputs/ProductKeyMaxAggregate";
import { ProductKeyMinAggregate } from "../outputs/ProductKeyMinAggregate";
export declare class AggregateProductKey {
    _count: ProductKeyCountAggregate | null;
    _min: ProductKeyMinAggregate | null;
    _max: ProductKeyMaxAggregate | null;
}
