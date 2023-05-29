import { GraphQLResolveInfo } from "graphql";
import { CreateLLMQueryArgs } from "./args/CreateLLMQueryArgs";
import { LLMQuery } from "../../../models/LLMQuery";
export declare class CreateLLMQueryResolver {
    createLLMQuery(ctx: any, info: GraphQLResolveInfo, args: CreateLLMQueryArgs): Promise<LLMQuery>;
}
