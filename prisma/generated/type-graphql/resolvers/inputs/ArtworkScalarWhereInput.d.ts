import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class ArtworkScalarWhereInput {
    AND?: ArtworkScalarWhereInput[] | undefined;
    OR?: ArtworkScalarWhereInput[] | undefined;
    NOT?: ArtworkScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    caption?: StringFilter | undefined;
    url?: StringFilter | undefined;
    productIds?: StringNullableListFilter | undefined;
    inventoryId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
