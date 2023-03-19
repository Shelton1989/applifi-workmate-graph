import { MealCreateNestedOneWithoutOrdersInput } from "../inputs/MealCreateNestedOneWithoutOrdersInput";
import { OrderLineItemCreateNestedManyWithoutOrderInput } from "../inputs/OrderLineItemCreateNestedManyWithoutOrderInput";
import { TenantCreateNestedOneWithoutOrdersInput } from "../inputs/TenantCreateNestedOneWithoutOrdersInput";
export declare class OrderCreateWithoutPatientInput {
    id?: string | undefined;
    Meal: MealCreateNestedOneWithoutOrdersInput;
    status?: "OPEN" | "ORDERED" | "IN_PREPARATION" | "READY_FOR_COLLECTION" | "IN_TRANSIT" | "ARRIVED" | "COMPLETE" | "CANCELLED" | undefined;
    Tenant: TenantCreateNestedOneWithoutOrdersInput;
    Items?: OrderLineItemCreateNestedManyWithoutOrderInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
