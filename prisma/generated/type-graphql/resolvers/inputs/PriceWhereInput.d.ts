import { BookingOrderLineItemListRelationFilter } from "../inputs/BookingOrderLineItemListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { CurrencyRelationFilter } from "../inputs/CurrencyRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ExperienceRelationFilter } from "../inputs/ExperienceRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class PriceWhereInput {
    AND?: PriceWhereInput[] | undefined;
    OR?: PriceWhereInput[] | undefined;
    NOT?: PriceWhereInput[] | undefined;
    id?: StringFilter | undefined;
    priceInLowestDenomination?: IntFilter | undefined;
    displayPrice?: StringFilter | undefined;
    currency?: CurrencyRelationFilter | undefined;
    currencyId?: StringNullableFilter | undefined;
    details?: StringNullableFilter | undefined;
    Experience?: ExperienceRelationFilter | undefined;
    experienceId?: StringFilter | undefined;
    BookingLineItems?: BookingOrderLineItemListRelationFilter | undefined;
    isBasePrice?: BoolFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
