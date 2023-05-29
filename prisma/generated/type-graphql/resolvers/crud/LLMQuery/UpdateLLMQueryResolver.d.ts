import { GraphQLResolveInfo } from "graphql";
import { UpdateLLMQueryArgs } from "./args/UpdateLLMQueryArgs";
import { LLMQuery } from "../../../models/LLMQuery";
export declare class UpdateLLMQueryResolver {
    updateLLMQuery(ctx: any, info: GraphQLResolveInfo, args: UpdateLLMQueryArgs): Promise<LLMQuery | null>;
}
