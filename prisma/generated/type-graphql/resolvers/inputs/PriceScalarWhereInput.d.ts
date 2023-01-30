import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class PriceScalarWhereInput {
    AND?: PriceScalarWhereInput[] | undefined;
    OR?: PriceScalarWhereInput[] | undefined;
    NOT?: PriceScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    priceInLowestDenomination?: IntFilter | undefined;
    displayPrice?: StringFilter | undefined;
    currencyId?: StringNullableFilter | undefined;
    details?: StringNullableFilter | undefined;
    experienceId?: StringFilter | undefined;
    isBasePrice?: BoolFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
