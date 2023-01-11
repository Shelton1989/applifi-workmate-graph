import { PriceAvgOrderByAggregateInput } from "../inputs/PriceAvgOrderByAggregateInput";
import { PriceCountOrderByAggregateInput } from "../inputs/PriceCountOrderByAggregateInput";
import { PriceMaxOrderByAggregateInput } from "../inputs/PriceMaxOrderByAggregateInput";
import { PriceMinOrderByAggregateInput } from "../inputs/PriceMinOrderByAggregateInput";
import { PriceSumOrderByAggregateInput } from "../inputs/PriceSumOrderByAggregateInput";
export declare class PriceOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    priceInLowestDenomination?: "asc" | "desc" | undefined;
    displayPrice?: "asc" | "desc" | undefined;
    currencyId?: "asc" | "desc" | undefined;
    details?: "asc" | "desc" | undefined;
    experienceId?: "asc" | "desc" | undefined;
    isBasePrice?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: PriceCountOrderByAggregateInput | undefined;
    _avg?: PriceAvgOrderByAggregateInput | undefined;
    _max?: PriceMaxOrderByAggregateInput | undefined;
    _min?: PriceMinOrderByAggregateInput | undefined;
    _sum?: PriceSumOrderByAggregateInput | undefined;
}
