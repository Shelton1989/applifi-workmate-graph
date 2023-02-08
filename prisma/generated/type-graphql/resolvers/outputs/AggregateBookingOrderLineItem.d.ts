import { BookingOrderLineItemAvgAggregate } from "../outputs/BookingOrderLineItemAvgAggregate";
import { BookingOrderLineItemCountAggregate } from "../outputs/BookingOrderLineItemCountAggregate";
import { BookingOrderLineItemMaxAggregate } from "../outputs/BookingOrderLineItemMaxAggregate";
import { BookingOrderLineItemMinAggregate } from "../outputs/BookingOrderLineItemMinAggregate";
import { BookingOrderLineItemSumAggregate } from "../outputs/BookingOrderLineItemSumAggregate";
export declare class AggregateBookingOrderLineItem {
    _count: BookingOrderLineItemCountAggregate | null;
    _avg: BookingOrderLineItemAvgAggregate | null;
    _sum: BookingOrderLineItemSumAggregate | null;
    _min: BookingOrderLineItemMinAggregate | null;
    _max: BookingOrderLineItemMaxAggregate | null;
}