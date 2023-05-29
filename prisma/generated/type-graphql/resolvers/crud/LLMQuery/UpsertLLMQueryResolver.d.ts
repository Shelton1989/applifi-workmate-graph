import { GraphQLResolveInfo } from "graphql";
import { UpsertLLMQueryArgs } from "./args/UpsertLLMQueryArgs";
import { LLMQuery } from "../../../models/LLMQuery";
export declare class UpsertLLMQueryResolver {
    upsertLLMQuery(ctx: any, info: GraphQLResolveInfo, args: UpsertLLMQueryArgs): Promise<LLMQuery>;
}
