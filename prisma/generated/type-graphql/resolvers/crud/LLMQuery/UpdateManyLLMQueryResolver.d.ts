import { GraphQLResolveInfo } from "graphql";
import { UpdateManyLLMQueryArgs } from "./args/UpdateManyLLMQueryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyLLMQueryResolver {
    updateManyLLMQuery(ctx: any, info: GraphQLResolveInfo, args: UpdateManyLLMQueryArgs): Promise<AffectedRowsOutput>;
}
