import { GraphQLResolveInfo } from "graphql";
import { FindUniqueLLMQueryArgs } from "./args/FindUniqueLLMQueryArgs";
import { LLMQuery } from "../../../models/LLMQuery";
export declare class FindUniqueLLMQueryResolver {
    lLMQuery(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLLMQueryArgs): Promise<LLMQuery | null>;
}
