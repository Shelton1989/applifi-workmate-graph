import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class InventoryScalarWhereWithAggregatesInput {
    AND?: InventoryScalarWhereWithAggregatesInput[] | undefined;
    OR?: InventoryScalarWhereWithAggregatesInput[] | undefined;
    NOT?: InventoryScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
