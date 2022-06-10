import { OrderLineItemCountAggregate } from "../outputs/OrderLineItemCountAggregate";
import { OrderLineItemMaxAggregate } from "../outputs/OrderLineItemMaxAggregate";
import { OrderLineItemMinAggregate } from "../outputs/OrderLineItemMinAggregate";
export declare class AggregateOrderLineItem {
    _count: OrderLineItemCountAggregate | null;
    _min: OrderLineItemMinAggregate | null;
    _max: OrderLineItemMaxAggregate | null;
}
