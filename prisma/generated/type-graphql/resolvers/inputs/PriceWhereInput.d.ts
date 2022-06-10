import { CurrencyRelationFilter } from "../inputs/CurrencyRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OrderLineItemListRelationFilter } from "../inputs/OrderLineItemListRelationFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { ShippingMethodListRelationFilter } from "../inputs/ShippingMethodListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class PriceWhereInput {
    AND?: PriceWhereInput[] | undefined;
    OR?: PriceWhereInput[] | undefined;
    NOT?: PriceWhereInput[] | undefined;
    id?: StringFilter | undefined;
    priceInLowestDenomination?: IntFilter | undefined;
    displayPrice?: StringFilter | undefined;
    currency?: CurrencyRelationFilter | undefined;
    currencyId?: StringFilter | undefined;
    ShippingMethods?: ShippingMethodListRelationFilter | undefined;
    Products?: ProductListRelationFilter | undefined;
    OrderLineItems?: OrderLineItemListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
