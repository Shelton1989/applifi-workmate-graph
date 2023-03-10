import { MealCreateNestedOneWithoutOrdersInput } from "../inputs/MealCreateNestedOneWithoutOrdersInput";
import { OrderLineItemCreateNestedManyWithoutBookingInput } from "../inputs/OrderLineItemCreateNestedManyWithoutBookingInput";
import { TenantCreateNestedOneWithoutOrdersInput } from "../inputs/TenantCreateNestedOneWithoutOrdersInput";
export declare class OrderCreateWithoutPatientInput {
    id?: string | undefined;
    Meal: MealCreateNestedOneWithoutOrdersInput;
    status?: "OPEN" | "ORDERED" | "IN_PREPARATION" | "READY_FOR_COLLECTION" | "IN_TRANSIT" | "ARRIVED" | "COMPLETE" | "CANCELLED" | undefined;
    Tenant: TenantCreateNestedOneWithoutOrdersInput;
    Items?: OrderLineItemCreateNestedManyWithoutBookingInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
