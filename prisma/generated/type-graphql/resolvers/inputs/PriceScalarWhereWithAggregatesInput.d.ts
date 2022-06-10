import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class PriceScalarWhereWithAggregatesInput {
    AND?: PriceScalarWhereWithAggregatesInput[] | undefined;
    OR?: PriceScalarWhereWithAggregatesInput[] | undefined;
    NOT?: PriceScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    priceInLowestDenomination?: IntWithAggregatesFilter | undefined;
    displayPrice?: StringWithAggregatesFilter | undefined;
    currencyId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
