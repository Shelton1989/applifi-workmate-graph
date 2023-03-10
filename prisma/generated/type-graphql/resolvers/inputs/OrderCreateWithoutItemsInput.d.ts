import { MealCreateNestedOneWithoutOrdersInput } from "../inputs/MealCreateNestedOneWithoutOrdersInput";
import { TenantCreateNestedOneWithoutOrdersInput } from "../inputs/TenantCreateNestedOneWithoutOrdersInput";
import { UserCreateNestedOneWithoutBookingsInput } from "../inputs/UserCreateNestedOneWithoutBookingsInput";
export declare class OrderCreateWithoutItemsInput {
    id?: string | undefined;
    Meal: MealCreateNestedOneWithoutOrdersInput;
    status?: "OPEN" | "ORDERED" | "IN_PREPARATION" | "READY_FOR_COLLECTION" | "IN_TRANSIT" | "ARRIVED" | "COMPLETE" | "CANCELLED" | undefined;
    Patient: UserCreateNestedOneWithoutBookingsInput;
    Tenant: TenantCreateNestedOneWithoutOrdersInput;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
