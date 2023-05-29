import { QueryOrderByWithAggregationInput } from "../../../inputs/QueryOrderByWithAggregationInput";
import { QueryScalarWhereWithAggregatesInput } from "../../../inputs/QueryScalarWhereWithAggregatesInput";
import { QueryWhereInput } from "../../../inputs/QueryWhereInput";
export declare class GroupByQueryArgs {
    where?: QueryWhereInput | undefined;
    orderBy?: QueryOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "tenantId" | "queryLink" | "queryText" | "createdAt" | "updatedAt" | "userId">;
    having?: QueryScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
