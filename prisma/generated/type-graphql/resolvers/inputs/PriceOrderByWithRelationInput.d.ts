import { CurrencyOrderByWithRelationInput } from "../inputs/CurrencyOrderByWithRelationInput";
import { OrderLineItemOrderByRelationAggregateInput } from "../inputs/OrderLineItemOrderByRelationAggregateInput";
import { ProductOrderByRelationAggregateInput } from "../inputs/ProductOrderByRelationAggregateInput";
import { ShippingMethodOrderByRelationAggregateInput } from "../inputs/ShippingMethodOrderByRelationAggregateInput";
export declare class PriceOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    priceInLowestDenomination?: "asc" | "desc" | undefined;
    displayPrice?: "asc" | "desc" | undefined;
    currency?: CurrencyOrderByWithRelationInput | undefined;
    currencyId?: "asc" | "desc" | undefined;
    ShippingMethods?: ShippingMethodOrderByRelationAggregateInput | undefined;
    Products?: ProductOrderByRelationAggregateInput | undefined;
    OrderLineItems?: OrderLineItemOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
