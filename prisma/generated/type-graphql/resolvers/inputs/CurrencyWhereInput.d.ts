import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { PriceListRelationFilter } from "../inputs/PriceListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CurrencyWhereInput {
    AND?: CurrencyWhereInput[] | undefined;
    OR?: CurrencyWhereInput[] | undefined;
    NOT?: CurrencyWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    symbol?: StringFilter | undefined;
    code?: StringFilter | undefined;
    prices?: PriceListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}