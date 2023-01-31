import { BookingOrderLineItemCreateNestedManyWithoutBookingInput } from "../inputs/BookingOrderLineItemCreateNestedManyWithoutBookingInput";
import { ExperienceCreateNestedOneWithoutBookingsInput } from "../inputs/ExperienceCreateNestedOneWithoutBookingsInput";
import { UserCreateNestedOneWithoutBookingsInput } from "../inputs/UserCreateNestedOneWithoutBookingsInput";
export declare class BookingOrderCreateWithoutTenantInput {
    id?: string | undefined;
    Experience: ExperienceCreateNestedOneWithoutBookingsInput;
    status?: "OPEN" | "BOOKED" | "BOOKED_PENDING_PAYMENT" | "READY_FOR_CHECK_IN" | "CHECKED_IN" | "READY_FOR_CHECK_OUT" | "COMPLETE" | "CANCELLED" | undefined;
    SelectedPaymentType?: string | undefined;
    stripePaymentReference?: string | undefined;
    Buyer: UserCreateNestedOneWithoutBookingsInput;
    Items?: BookingOrderLineItemCreateNestedManyWithoutBookingInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
