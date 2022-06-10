import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { OrderLineItemListRelationFilter } from "../inputs/OrderLineItemListRelationFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class ColorWhereInput {
    AND?: ColorWhereInput[] | undefined;
    OR?: ColorWhereInput[] | undefined;
    NOT?: ColorWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    hex?: StringFilter | undefined;
    Products?: ProductListRelationFilter | undefined;
    productIds?: StringNullableListFilter | undefined;
    OrderLineItems?: OrderLineItemListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
