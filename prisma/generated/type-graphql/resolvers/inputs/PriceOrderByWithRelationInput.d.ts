import { BookingOrderLineItemOrderByRelationAggregateInput } from "../inputs/BookingOrderLineItemOrderByRelationAggregateInput";
import { CurrencyOrderByWithRelationInput } from "../inputs/CurrencyOrderByWithRelationInput";
import { ExperienceOrderByWithRelationInput } from "../inputs/ExperienceOrderByWithRelationInput";
export declare class PriceOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    priceInLowestDenomination?: "asc" | "desc" | undefined;
    displayPrice?: "asc" | "desc" | undefined;
    currency?: CurrencyOrderByWithRelationInput | undefined;
    currencyId?: "asc" | "desc" | undefined;
    details?: "asc" | "desc" | undefined;
    Experience?: ExperienceOrderByWithRelationInput | undefined;
    experienceId?: "asc" | "desc" | undefined;
    BookingLineItems?: BookingOrderLineItemOrderByRelationAggregateInput | undefined;
    isBasePrice?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
