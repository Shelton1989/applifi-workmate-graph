import { MealCreateNestedOneWithoutOrdersInput } from "../inputs/MealCreateNestedOneWithoutOrdersInput";
import { OrderLineItemCreateNestedManyWithoutOrderInput } from "../inputs/OrderLineItemCreateNestedManyWithoutOrderInput";
import { UserCreateNestedOneWithoutBookingsInput } from "../inputs/UserCreateNestedOneWithoutBookingsInput";
export declare class OrderCreateWithoutTenantInput {
    id?: string | undefined;
    Meal: MealCreateNestedOneWithoutOrdersInput;
    status?: "OPEN" | "ORDERED" | "IN_PREPARATION" | "READY_FOR_COLLECTION" | "IN_TRANSIT" | "ARRIVED" | "COMPLETE" | "CANCELLED" | undefined;
    Patient: UserCreateNestedOneWithoutBookingsInput;
    Items?: OrderLineItemCreateNestedManyWithoutOrderInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
