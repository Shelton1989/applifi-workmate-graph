import { MealOrderByWithRelationInput } from "../inputs/MealOrderByWithRelationInput";
import { OrderLineItemOrderByRelationAggregateInput } from "../inputs/OrderLineItemOrderByRelationAggregateInput";
import { TenantOrderByWithRelationInput } from "../inputs/TenantOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class OrderOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    Meal?: MealOrderByWithRelationInput | undefined;
    mealId?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    Patient?: UserOrderByWithRelationInput | undefined;
    patientId?: "asc" | "desc" | undefined;
    Tenant?: TenantOrderByWithRelationInput | undefined;
    tenantId?: "asc" | "desc" | undefined;
    Items?: OrderLineItemOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
