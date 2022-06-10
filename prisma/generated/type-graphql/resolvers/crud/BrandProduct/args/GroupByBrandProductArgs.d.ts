import { BrandProductOrderByWithAggregationInput } from "../../../inputs/BrandProductOrderByWithAggregationInput";
import { BrandProductScalarWhereWithAggregatesInput } from "../../../inputs/BrandProductScalarWhereWithAggregatesInput";
import { BrandProductWhereInput } from "../../../inputs/BrandProductWhereInput";
export declare class GroupByBrandProductArgs {
    where?: BrandProductWhereInput | undefined;
    orderBy?: BrandProductOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "releaseYear" | "description" | "type" | "category" | "brandId" | "status" | "createdAt" | "updatedAt">;
    having?: BrandProductScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
