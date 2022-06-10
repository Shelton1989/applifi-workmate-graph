import { ShippingMethodAvgAggregate } from "../outputs/ShippingMethodAvgAggregate";
import { ShippingMethodCountAggregate } from "../outputs/ShippingMethodCountAggregate";
import { ShippingMethodMaxAggregate } from "../outputs/ShippingMethodMaxAggregate";
import { ShippingMethodMinAggregate } from "../outputs/ShippingMethodMinAggregate";
import { ShippingMethodSumAggregate } from "../outputs/ShippingMethodSumAggregate";
export declare class AggregateShippingMethod {
    _count: ShippingMethodCountAggregate | null;
    _avg: ShippingMethodAvgAggregate | null;
    _sum: ShippingMethodSumAggregate | null;
    _min: ShippingMethodMinAggregate | null;
    _max: ShippingMethodMaxAggregate | null;
}
