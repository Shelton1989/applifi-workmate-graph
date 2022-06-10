import { BrandOrderByWithAggregationInput } from "../../../inputs/BrandOrderByWithAggregationInput";
import { BrandScalarWhereWithAggregatesInput } from "../../../inputs/BrandScalarWhereWithAggregatesInput";
import { BrandWhereInput } from "../../../inputs/BrandWhereInput";
export declare class GroupByBrandArgs {
    where?: BrandWhereInput | undefined;
    orderBy?: BrandOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "description" | "tagline" | "status" | "createdAt" | "updatedAt">;
    having?: BrandScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
