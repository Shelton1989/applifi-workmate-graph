import { BookingOrderLineItemCreateNestedManyWithoutBookingInput } from "../inputs/BookingOrderLineItemCreateNestedManyWithoutBookingInput";
import { ExperienceCreateNestedOneWithoutBookingsInput } from "../inputs/ExperienceCreateNestedOneWithoutBookingsInput";
import { TransactionCreateNestedManyWithoutBookingOrderInput } from "../inputs/TransactionCreateNestedManyWithoutBookingOrderInput";
import { UserCreateNestedOneWithoutBookingsInput } from "../inputs/UserCreateNestedOneWithoutBookingsInput";
export declare class BookingOrderCreateWithoutTenantInput {
    id?: string | undefined;
    Experience: ExperienceCreateNestedOneWithoutBookingsInput;
    status?: "OPEN" | "BOOKED_PENDING_PAYMENT" | "BOOKED_DEPOSIT_PAID" | "BOOKED_PENDING_FINAL_PAYMENT" | "BOOKED" | "READY_FOR_CHECK_IN" | "CHECKED_IN" | "READY_FOR_CHECK_OUT" | "COMPLETE" | "CANCELLED" | undefined;
    Buyer: UserCreateNestedOneWithoutBookingsInput;
    Items?: BookingOrderLineItemCreateNestedManyWithoutBookingInput | undefined;
    Transactions?: TransactionCreateNestedManyWithoutBookingOrderInput | undefined;
    PaymentStatus?: "PENDING" | "PAID" | "REFUNDED" | "FAILED" | "CANCELLED" | "OTHER" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
