import { BookingOrderLineItem } from "../models/BookingOrderLineItem";
import { Tenant } from "../models/Tenant";
import { User } from "../models/User";
import { BookingOrderCount } from "../resolvers/outputs/BookingOrderCount";
export declare class BookingOrder {
    id: string;
    status: "OPEN" | "BOOKED" | "BOOKED_PENDING_PAYMENT" | "READY_FOR_CHECK_IN" | "CHECKED_IN" | "READY_FOR_CHECK_OUT" | "COMPLETE" | "CANCELLED";
    SelectedPaymentType?: string | null;
    stripePaymentReference?: string | null;
    Buyer?: User;
    buyerId: string;
    Tenant?: Tenant;
    tenantId: string;
    Items?: BookingOrderLineItem[];
    createdAt: Date;
    updatedAt: Date;
    _count?: BookingOrderCount | null;
}
