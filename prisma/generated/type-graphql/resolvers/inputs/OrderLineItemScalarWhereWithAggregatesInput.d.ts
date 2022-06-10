import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class OrderLineItemScalarWhereWithAggregatesInput {
    AND?: OrderLineItemScalarWhereWithAggregatesInput[] | undefined;
    OR?: OrderLineItemScalarWhereWithAggregatesInput[] | undefined;
    NOT?: OrderLineItemScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    priceId?: StringWithAggregatesFilter | undefined;
    selectedProductId?: StringWithAggregatesFilter | undefined;
    selectedColorId?: StringWithAggregatesFilter | undefined;
    selectedArtworkId?: StringWithAggregatesFilter | undefined;
    selectedSizeId?: StringWithAggregatesFilter | undefined;
    orderId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
