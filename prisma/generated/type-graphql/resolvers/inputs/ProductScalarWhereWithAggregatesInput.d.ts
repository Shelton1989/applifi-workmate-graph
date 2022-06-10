import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ProductScalarWhereWithAggregatesInput {
    AND?: ProductScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProductScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProductScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    priceId?: StringWithAggregatesFilter | undefined;
    availableQuantity?: IntWithAggregatesFilter | undefined;
    photo?: StringWithAggregatesFilter | undefined;
    gallery?: StringNullableListFilter | undefined;
    baseProductId?: StringWithAggregatesFilter | undefined;
    artworkIds?: StringNullableListFilter | undefined;
    colorIds?: StringNullableListFilter | undefined;
    sizeIds?: StringNullableListFilter | undefined;
    likedByIds?: StringNullableListFilter | undefined;
    inventoryId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
