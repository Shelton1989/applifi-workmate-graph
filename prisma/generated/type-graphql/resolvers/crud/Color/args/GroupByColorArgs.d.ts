import { ColorOrderByWithAggregationInput } from "../../../inputs/ColorOrderByWithAggregationInput";
import { ColorScalarWhereWithAggregatesInput } from "../../../inputs/ColorScalarWhereWithAggregatesInput";
import { ColorWhereInput } from "../../../inputs/ColorWhereInput";
export declare class GroupByColorArgs {
    where?: ColorWhereInput | undefined;
    orderBy?: ColorOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "hex" | "productIds" | "createdAt" | "updatedAt">;
    having?: ColorScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
