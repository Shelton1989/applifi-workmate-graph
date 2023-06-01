import { LLMQueryOrderByWithAggregationInput } from "../../../inputs/LLMQueryOrderByWithAggregationInput";
import { LLMQueryScalarWhereWithAggregatesInput } from "../../../inputs/LLMQueryScalarWhereWithAggregatesInput";
import { LLMQueryWhereInput } from "../../../inputs/LLMQueryWhereInput";
export declare class GroupByLLMQueryArgs {
    where?: LLMQueryWhereInput | undefined;
    orderBy?: LLMQueryOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "tenantId" | "queryLink" | "question" | "response" | "createdAt" | "updatedAt" | "userId">;
    having?: LLMQueryScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
