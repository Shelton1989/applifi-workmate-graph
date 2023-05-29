import { GraphQLResolveInfo } from "graphql";
import { FindManyLLMQueryArgs } from "./args/FindManyLLMQueryArgs";
import { LLMQuery } from "../../../models/LLMQuery";
export declare class FindManyLLMQueryResolver {
    lLMQueries(ctx: any, info: GraphQLResolveInfo, args: FindManyLLMQueryArgs): Promise<LLMQuery[]>;
}
