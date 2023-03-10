import { WardOrderByWithAggregationInput } from "../../../inputs/WardOrderByWithAggregationInput";
import { WardScalarWhereWithAggregatesInput } from "../../../inputs/WardScalarWhereWithAggregatesInput";
import { WardWhereInput } from "../../../inputs/WardWhereInput";
export declare class GroupByWardArgs {
    where?: WardWhereInput | undefined;
    orderBy?: WardOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "number" | "name" | "description" | "createdAt" | "updatedAt">;
    having?: WardScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
