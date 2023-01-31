import { BookingOrderLineItemCountAggregate } from "../outputs/BookingOrderLineItemCountAggregate";
import { BookingOrderLineItemMaxAggregate } from "../outputs/BookingOrderLineItemMaxAggregate";
import { BookingOrderLineItemMinAggregate } from "../outputs/BookingOrderLineItemMinAggregate";
export declare class BookingOrderLineItemGroupBy {
    id: string;
    details: string | null;
    comments: string | null;
    priceId: string;
    bookingId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: BookingOrderLineItemCountAggregate | null;
    _min: BookingOrderLineItemMinAggregate | null;
    _max: BookingOrderLineItemMaxAggregate | null;
}
