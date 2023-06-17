import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ProductKeyScalarWhereWithAggregatesInput {
    AND?: ProductKeyScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProductKeyScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProductKeyScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    billingId?: StringWithAggregatesFilter | undefined;
    key?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
