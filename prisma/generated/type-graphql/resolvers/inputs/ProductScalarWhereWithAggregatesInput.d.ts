import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumSTATUSWithAggregatesFilter } from "../inputs/EnumSTATUSWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ProductScalarWhereWithAggregatesInput {
    AND?: ProductScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProductScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProductScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    publishStatus?: EnumSTATUSWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    priceId?: StringNullableWithAggregatesFilter | undefined;
    availableQuantity?: IntNullableWithAggregatesFilter | undefined;
    photo?: StringNullableWithAggregatesFilter | undefined;
    gallery?: StringNullableListFilter | undefined;
    baseProductId?: StringNullableWithAggregatesFilter | undefined;
    artworkIds?: StringNullableListFilter | undefined;
    colorIds?: StringNullableListFilter | undefined;
    sizeIds?: StringNullableListFilter | undefined;
    likedByIds?: StringNullableListFilter | undefined;
    inventoryId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
