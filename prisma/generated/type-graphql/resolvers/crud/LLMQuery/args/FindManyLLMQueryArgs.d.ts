import { LLMQueryOrderByWithRelationInput } from "../../../inputs/LLMQueryOrderByWithRelationInput";
import { LLMQueryWhereInput } from "../../../inputs/LLMQueryWhereInput";
import { LLMQueryWhereUniqueInput } from "../../../inputs/LLMQueryWhereUniqueInput";
export declare class FindManyLLMQueryArgs {
    where?: LLMQueryWhereInput | undefined;
    orderBy?: LLMQueryOrderByWithRelationInput[] | undefined;
    cursor?: LLMQueryWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "tenantId" | "queryLink" | "queryText" | "createdAt" | "updatedAt" | "userId"> | undefined;
}
