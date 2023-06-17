import { ProductKeyOrderByWithAggregationInput } from "../../../inputs/ProductKeyOrderByWithAggregationInput";
import { ProductKeyScalarWhereWithAggregatesInput } from "../../../inputs/ProductKeyScalarWhereWithAggregatesInput";
import { ProductKeyWhereInput } from "../../../inputs/ProductKeyWhereInput";
export declare class GroupByProductKeyArgs {
    where?: ProductKeyWhereInput | undefined;
    orderBy?: ProductKeyOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "billingId" | "createdBy" | "key" | "createdAt" | "updatedAt">;
    having?: ProductKeyScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
