import { BookingOrderCountAggregate } from "../outputs/BookingOrderCountAggregate";
import { BookingOrderMaxAggregate } from "../outputs/BookingOrderMaxAggregate";
import { BookingOrderMinAggregate } from "../outputs/BookingOrderMinAggregate";
export declare class BookingOrderGroupBy {
    id: string;
    status: "OPEN" | "BOOKED" | "BOOKED_PENDING_PAYMENT" | "READY_FOR_CHECK_IN" | "CHECKED_IN" | "READY_FOR_CHECK_OUT" | "COMPLETE" | "CANCELLED";
    SelectedPaymentType: string | null;
    stripePaymentReference: string | null;
    buyerId: string;
    tenantId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: BookingOrderCountAggregate | null;
    _min: BookingOrderMinAggregate | null;
    _max: BookingOrderMaxAggregate | null;
}
