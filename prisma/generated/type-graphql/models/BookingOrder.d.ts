import { BookingOrderLineItem } from "../models/BookingOrderLineItem";
import { Experience } from "../models/Experience";
import { Tenant } from "../models/Tenant";
import { Transaction } from "../models/Transaction";
import { User } from "../models/User";
import { BookingOrderCount } from "../resolvers/outputs/BookingOrderCount";
export declare class BookingOrder {
    id: string;
    Experience?: Experience;
    experienceId: string;
    status: "OPEN" | "BOOKED_PENDING_PAYMENT" | "BOOKED_DEPOSIT_PAID" | "BOOKED_PENDING_FINAL_PAYMENT" | "BOOKED" | "READY_FOR_CHECK_IN" | "CHECKED_IN" | "READY_FOR_CHECK_OUT" | "COMPLETE" | "CANCELLED";
    Buyer?: User;
    buyerId: string;
    Tenant?: Tenant;
    tenantId: string;
    Items?: BookingOrderLineItem[];
    Transactions?: Transaction[];
    PaymentStatus: "PENDING" | "PAID" | "REFUNDED" | "FAILED" | "CANCELLED" | "OTHER";
    createdAt: Date;
    updatedAt: Date;
    _count?: BookingOrderCount | null;
}
