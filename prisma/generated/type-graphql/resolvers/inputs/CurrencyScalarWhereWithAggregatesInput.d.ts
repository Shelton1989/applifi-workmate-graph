import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CurrencyScalarWhereWithAggregatesInput {
    AND?: CurrencyScalarWhereWithAggregatesInput[] | undefined;
    OR?: CurrencyScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CurrencyScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    symbol?: StringWithAggregatesFilter | undefined;
    code?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
