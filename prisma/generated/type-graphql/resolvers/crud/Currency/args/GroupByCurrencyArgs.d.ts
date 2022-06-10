import { CurrencyOrderByWithAggregationInput } from "../../../inputs/CurrencyOrderByWithAggregationInput";
import { CurrencyScalarWhereWithAggregatesInput } from "../../../inputs/CurrencyScalarWhereWithAggregatesInput";
import { CurrencyWhereInput } from "../../../inputs/CurrencyWhereInput";
export declare class GroupByCurrencyArgs {
    where?: CurrencyWhereInput | undefined;
    orderBy?: CurrencyOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "symbol" | "code" | "createdAt" | "updatedAt">;
    having?: CurrencyScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
