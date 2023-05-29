import { GraphQLResolveInfo } from "graphql";
import { FindFirstLLMQueryArgs } from "./args/FindFirstLLMQueryArgs";
import { LLMQuery } from "../../../models/LLMQuery";
export declare class FindFirstLLMQueryResolver {
    findFirstLLMQuery(ctx: any, info: GraphQLResolveInfo, args: FindFirstLLMQueryArgs): Promise<LLMQuery | null>;
}
