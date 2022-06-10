import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { InventoryRelationFilter } from "../inputs/InventoryRelationFilter";
import { OrderLineItemListRelationFilter } from "../inputs/OrderLineItemListRelationFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class ArtworkWhereInput {
    AND?: ArtworkWhereInput[] | undefined;
    OR?: ArtworkWhereInput[] | undefined;
    NOT?: ArtworkWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    caption?: StringFilter | undefined;
    url?: StringFilter | undefined;
    Products?: ProductListRelationFilter | undefined;
    productIds?: StringNullableListFilter | undefined;
    Inventory?: InventoryRelationFilter | undefined;
    inventoryId?: StringFilter | undefined;
    OrderLineItems?: OrderLineItemListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
