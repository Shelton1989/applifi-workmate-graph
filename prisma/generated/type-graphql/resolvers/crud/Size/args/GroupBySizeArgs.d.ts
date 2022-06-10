import { SizeOrderByWithAggregationInput } from "../../../inputs/SizeOrderByWithAggregationInput";
import { SizeScalarWhereWithAggregatesInput } from "../../../inputs/SizeScalarWhereWithAggregatesInput";
import { SizeWhereInput } from "../../../inputs/SizeWhereInput";
export declare class GroupBySizeArgs {
    where?: SizeWhereInput | undefined;
    orderBy?: SizeOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "value" | "region" | "productIds" | "createdAt" | "updatedAt">;
    having?: SizeScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
