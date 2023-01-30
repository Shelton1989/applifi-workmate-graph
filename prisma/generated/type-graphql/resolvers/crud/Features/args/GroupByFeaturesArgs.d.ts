import { FeaturesOrderByWithAggregationInput } from "../../../inputs/FeaturesOrderByWithAggregationInput";
import { FeaturesScalarWhereWithAggregatesInput } from "../../../inputs/FeaturesScalarWhereWithAggregatesInput";
import { FeaturesWhereInput } from "../../../inputs/FeaturesWhereInput";
export declare class GroupByFeaturesArgs {
    where?: FeaturesWhereInput | undefined;
    orderBy?: FeaturesOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "experienceId" | "title" | "shortDescription" | "createdAt" | "updatedAt">;
    having?: FeaturesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
