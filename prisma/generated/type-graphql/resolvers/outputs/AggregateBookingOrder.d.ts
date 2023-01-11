import { BookingOrderCountAggregate } from "../outputs/BookingOrderCountAggregate";
import { BookingOrderMaxAggregate } from "../outputs/BookingOrderMaxAggregate";
import { BookingOrderMinAggregate } from "../outputs/BookingOrderMinAggregate";
export declare class AggregateBookingOrder {
    _count: BookingOrderCountAggregate | null;
    _min: BookingOrderMinAggregate | null;
    _max: BookingOrderMaxAggregate | null;
}
