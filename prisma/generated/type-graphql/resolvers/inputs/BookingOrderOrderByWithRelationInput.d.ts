import { BookingOrderLineItemOrderByRelationAggregateInput } from "../inputs/BookingOrderLineItemOrderByRelationAggregateInput";
import { ExperienceOrderByWithRelationInput } from "../inputs/ExperienceOrderByWithRelationInput";
import { TenantOrderByWithRelationInput } from "../inputs/TenantOrderByWithRelationInput";
import { TransactionOrderByRelationAggregateInput } from "../inputs/TransactionOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class BookingOrderOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    Experience?: ExperienceOrderByWithRelationInput | undefined;
    experienceId?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    Buyer?: UserOrderByWithRelationInput | undefined;
    buyerId?: "asc" | "desc" | undefined;
    Tenant?: TenantOrderByWithRelationInput | undefined;
    tenantId?: "asc" | "desc" | undefined;
    Items?: BookingOrderLineItemOrderByRelationAggregateInput | undefined;
    Transactions?: TransactionOrderByRelationAggregateInput | undefined;
    PaymentStatus?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
