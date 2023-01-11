import { PriceOrderByWithAggregationInput } from "../../../inputs/PriceOrderByWithAggregationInput";
import { PriceScalarWhereWithAggregatesInput } from "../../../inputs/PriceScalarWhereWithAggregatesInput";
import { PriceWhereInput } from "../../../inputs/PriceWhereInput";
export declare class GroupByPriceArgs {
    where?: PriceWhereInput | undefined;
    orderBy?: PriceOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "priceInLowestDenomination" | "displayPrice" | "currencyId" | "details" | "experienceId" | "isBasePrice" | "createdAt" | "updatedAt">;
    having?: PriceScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
