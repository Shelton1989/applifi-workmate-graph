import { BookingOrderLineItemCountAggregate } from "../outputs/BookingOrderLineItemCountAggregate";
import { BookingOrderLineItemMaxAggregate } from "../outputs/BookingOrderLineItemMaxAggregate";
import { BookingOrderLineItemMinAggregate } from "../outputs/BookingOrderLineItemMinAggregate";
export declare class AggregateBookingOrderLineItem {
    _count: BookingOrderLineItemCountAggregate | null;
    _min: BookingOrderLineItemMinAggregate | null;
    _max: BookingOrderLineItemMaxAggregate | null;
}
