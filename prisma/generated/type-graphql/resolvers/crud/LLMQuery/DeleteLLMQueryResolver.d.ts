import { GraphQLResolveInfo } from "graphql";
import { DeleteLLMQueryArgs } from "./args/DeleteLLMQueryArgs";
import { LLMQuery } from "../../../models/LLMQuery";
export declare class DeleteLLMQueryResolver {
    deleteLLMQuery(ctx: any, info: GraphQLResolveInfo, args: DeleteLLMQueryArgs): Promise<LLMQuery | null>;
}
