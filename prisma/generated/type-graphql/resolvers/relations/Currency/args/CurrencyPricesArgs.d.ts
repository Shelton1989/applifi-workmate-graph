import { PriceOrderByWithRelationInput } from "../../../inputs/PriceOrderByWithRelationInput";
import { PriceWhereInput } from "../../../inputs/PriceWhereInput";
import { PriceWhereUniqueInput } from "../../../inputs/PriceWhereUniqueInput";
export declare class CurrencyPricesArgs {
    where?: PriceWhereInput | undefined;
    orderBy?: PriceOrderByWithRelationInput[] | undefined;
    cursor?: PriceWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "priceInLowestDenomination" | "displayPrice" | "currencyId" | "details" | "experienceId" | "isBasePrice" | "createdAt" | "updatedAt"> | undefined;
}
