import { BookingOrderLineItemCreateNestedManyWithoutBookingInput } from "../inputs/BookingOrderLineItemCreateNestedManyWithoutBookingInput";
import { ExperienceCreateNestedOneWithoutBookingsInput } from "../inputs/ExperienceCreateNestedOneWithoutBookingsInput";
import { TenantCreateNestedOneWithoutBookingOrdersInput } from "../inputs/TenantCreateNestedOneWithoutBookingOrdersInput";
export declare class BookingOrderCreateWithoutBuyerInput {
    id?: string | undefined;
    Experience: ExperienceCreateNestedOneWithoutBookingsInput;
    status?: "OPEN" | "BOOKED" | "BOOKED_PENDING_PAYMENT" | "READY_FOR_CHECK_IN" | "CHECKED_IN" | "READY_FOR_CHECK_OUT" | "COMPLETE" | "CANCELLED" | undefined;
    SelectedPaymentType?: string | undefined;
    stripePaymentReference?: string | undefined;
    Tenant: TenantCreateNestedOneWithoutBookingOrdersInput;
    Items?: BookingOrderLineItemCreateNestedManyWithoutBookingInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
