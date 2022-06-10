import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OrderListRelationFilter } from "../inputs/OrderListRelationFilter";
import { PriceRelationFilter } from "../inputs/PriceRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ShippingMethodWhereInput {
    AND?: ShippingMethodWhereInput[] | undefined;
    OR?: ShippingMethodWhereInput[] | undefined;
    NOT?: ShippingMethodWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringFilter | undefined;
    label?: StringFilter | undefined;
    arrivalTimeInBusinessDays?: IntFilter | undefined;
    arrivalTimeInBusinessDaysRang?: StringFilter | undefined;
    arrivalTimeDescription?: StringFilter | undefined;
    price?: PriceRelationFilter | undefined;
    priceId?: StringFilter | undefined;
    Orders?: OrderListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
