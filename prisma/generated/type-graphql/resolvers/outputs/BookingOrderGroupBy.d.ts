import { BookingOrderCountAggregate } from "../outputs/BookingOrderCountAggregate";
import { BookingOrderMaxAggregate } from "../outputs/BookingOrderMaxAggregate";
import { BookingOrderMinAggregate } from "../outputs/BookingOrderMinAggregate";
export declare class BookingOrderGroupBy {
    id: string;
    experienceId: string;
    status: "OPEN" | "BOOKED_PENDING_PAYMENT" | "BOOKED_DEPOSIT_PAID" | "BOOKED_PENDING_FINAL_PAYMENT" | "BOOKED" | "READY_FOR_CHECK_IN" | "CHECKED_IN" | "READY_FOR_CHECK_OUT" | "COMPLETE" | "CANCELLED";
    buyerId: string;
    tenantId: string;
    PaymentStatus: "PENDING" | "PAID" | "REFUNDED" | "FAILED" | "CANCELLED" | "OTHER";
    createdAt: Date;
    updatedAt: Date;
    _count: BookingOrderCountAggregate | null;
    _min: BookingOrderMinAggregate | null;
    _max: BookingOrderMaxAggregate | null;
}
