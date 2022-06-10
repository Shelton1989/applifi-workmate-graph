import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class PriceScalarWhereInput {
    AND?: PriceScalarWhereInput[] | undefined;
    OR?: PriceScalarWhereInput[] | undefined;
    NOT?: PriceScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    priceInLowestDenomination?: IntFilter | undefined;
    displayPrice?: StringFilter | undefined;
    currencyId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
