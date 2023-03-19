import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class OrderLineItemScalarWhereWithAggregatesInput {
    AND?: OrderLineItemScalarWhereWithAggregatesInput[] | undefined;
    OR?: OrderLineItemScalarWhereWithAggregatesInput[] | undefined;
    NOT?: OrderLineItemScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    details?: StringNullableWithAggregatesFilter | undefined;
    comments?: StringNullableWithAggregatesFilter | undefined;
    mealItemId?: StringNullableWithAggregatesFilter | undefined;
    mealItemOptionId?: StringNullableWithAggregatesFilter | undefined;
    orderId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
