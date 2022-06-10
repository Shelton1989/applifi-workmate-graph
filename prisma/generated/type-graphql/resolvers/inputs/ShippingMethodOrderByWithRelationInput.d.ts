import { OrderOrderByRelationAggregateInput } from "../inputs/OrderOrderByRelationAggregateInput";
import { PriceOrderByWithRelationInput } from "../inputs/PriceOrderByWithRelationInput";
export declare class ShippingMethodOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    label?: "asc" | "desc" | undefined;
    arrivalTimeInBusinessDays?: "asc" | "desc" | undefined;
    arrivalTimeInBusinessDaysRang?: "asc" | "desc" | undefined;
    arrivalTimeDescription?: "asc" | "desc" | undefined;
    price?: PriceOrderByWithRelationInput | undefined;
    priceId?: "asc" | "desc" | undefined;
    Orders?: OrderOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
