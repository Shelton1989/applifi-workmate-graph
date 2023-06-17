import { BillingOrderByWithRelationInput } from "../inputs/BillingOrderByWithRelationInput";
export declare class ProductKeyOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    Billing?: BillingOrderByWithRelationInput | undefined;
    billingId?: "asc" | "desc" | undefined;
    key?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
