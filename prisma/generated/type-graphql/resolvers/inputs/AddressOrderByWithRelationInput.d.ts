import { OrderOrderByRelationAggregateInput } from "../inputs/OrderOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class AddressOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    line1?: "asc" | "desc" | undefined;
    line2?: "asc" | "desc" | undefined;
    city?: "asc" | "desc" | undefined;
    district?: "asc" | "desc" | undefined;
    country?: "asc" | "desc" | undefined;
    code?: "asc" | "desc" | undefined;
    isDefault?: "asc" | "desc" | undefined;
    User?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    Orders?: OrderOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
