import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class LLMQueryScalarWhereWithAggregatesInput {
    AND?: LLMQueryScalarWhereWithAggregatesInput[] | undefined;
    OR?: LLMQueryScalarWhereWithAggregatesInput[] | undefined;
    NOT?: LLMQueryScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    tenantId?: StringWithAggregatesFilter | undefined;
    queryLink?: StringNullableWithAggregatesFilter | undefined;
    queryText?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    userId?: StringNullableWithAggregatesFilter | undefined;
}
