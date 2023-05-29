import { GraphQLResolveInfo } from "graphql";
import { DeleteManyLLMQueryArgs } from "./args/DeleteManyLLMQueryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyLLMQueryResolver {
    deleteManyLLMQuery(ctx: any, info: GraphQLResolveInfo, args: DeleteManyLLMQueryArgs): Promise<AffectedRowsOutput>;
}
