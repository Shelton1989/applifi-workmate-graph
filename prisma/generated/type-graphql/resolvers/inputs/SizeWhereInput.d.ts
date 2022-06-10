import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSIZE_REGIONFilter } from "../inputs/EnumSIZE_REGIONFilter";
import { OrderLineItemListRelationFilter } from "../inputs/OrderLineItemListRelationFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class SizeWhereInput {
    AND?: SizeWhereInput[] | undefined;
    OR?: SizeWhereInput[] | undefined;
    NOT?: SizeWhereInput[] | undefined;
    id?: StringFilter | undefined;
    value?: StringFilter | undefined;
    region?: EnumSIZE_REGIONFilter | undefined;
    Products?: ProductListRelationFilter | undefined;
    productIds?: StringNullableListFilter | undefined;
    OrderLineItems?: OrderLineItemListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
