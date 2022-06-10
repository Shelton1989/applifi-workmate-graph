import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ShippingMethodScalarWhereInput {
    AND?: ShippingMethodScalarWhereInput[] | undefined;
    OR?: ShippingMethodScalarWhereInput[] | undefined;
    NOT?: ShippingMethodScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringFilter | undefined;
    label?: StringFilter | undefined;
    arrivalTimeInBusinessDays?: IntFilter | undefined;
    arrivalTimeInBusinessDaysRang?: StringFilter | undefined;
    arrivalTimeDescription?: StringFilter | undefined;
    priceId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
