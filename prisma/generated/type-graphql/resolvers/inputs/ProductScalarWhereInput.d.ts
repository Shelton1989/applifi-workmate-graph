import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSTATUSFilter } from "../inputs/EnumSTATUSFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class ProductScalarWhereInput {
    AND?: ProductScalarWhereInput[] | undefined;
    OR?: ProductScalarWhereInput[] | undefined;
    NOT?: ProductScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    publishStatus?: EnumSTATUSFilter | undefined;
    description?: StringNullableFilter | undefined;
    priceId?: StringNullableFilter | undefined;
    availableQuantity?: IntNullableFilter | undefined;
    photo?: StringNullableFilter | undefined;
    gallery?: StringNullableListFilter | undefined;
    baseProductId?: StringNullableFilter | undefined;
    artworkIds?: StringNullableListFilter | undefined;
    colorIds?: StringNullableListFilter | undefined;
    sizeIds?: StringNullableListFilter | undefined;
    likedByIds?: StringNullableListFilter | undefined;
    inventoryId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
