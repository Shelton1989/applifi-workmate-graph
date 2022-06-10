import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class ProductScalarWhereInput {
    AND?: ProductScalarWhereInput[] | undefined;
    OR?: ProductScalarWhereInput[] | undefined;
    NOT?: ProductScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    description?: StringFilter | undefined;
    priceId?: StringFilter | undefined;
    availableQuantity?: IntFilter | undefined;
    photo?: StringFilter | undefined;
    gallery?: StringNullableListFilter | undefined;
    baseProductId?: StringFilter | undefined;
    artworkIds?: StringNullableListFilter | undefined;
    colorIds?: StringNullableListFilter | undefined;
    sizeIds?: StringNullableListFilter | undefined;
    likedByIds?: StringNullableListFilter | undefined;
    inventoryId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
