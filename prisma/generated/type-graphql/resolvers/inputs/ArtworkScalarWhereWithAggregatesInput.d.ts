import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ArtworkScalarWhereWithAggregatesInput {
    AND?: ArtworkScalarWhereWithAggregatesInput[] | undefined;
    OR?: ArtworkScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ArtworkScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    caption?: StringWithAggregatesFilter | undefined;
    url?: StringWithAggregatesFilter | undefined;
    productIds?: StringNullableListFilter | undefined;
    inventoryId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
