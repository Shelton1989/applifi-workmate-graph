import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ShippingMethodScalarWhereWithAggregatesInput {
    AND?: ShippingMethodScalarWhereWithAggregatesInput[] | undefined;
    OR?: ShippingMethodScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ShippingMethodScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    label?: StringWithAggregatesFilter | undefined;
    arrivalTimeInBusinessDays?: IntWithAggregatesFilter | undefined;
    arrivalTimeInBusinessDaysRang?: StringWithAggregatesFilter | undefined;
    arrivalTimeDescription?: StringWithAggregatesFilter | undefined;
    priceId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
