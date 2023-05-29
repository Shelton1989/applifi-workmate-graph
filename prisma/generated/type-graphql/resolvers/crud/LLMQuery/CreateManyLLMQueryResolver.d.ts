import { GraphQLResolveInfo } from "graphql";
import { CreateManyLLMQueryArgs } from "./args/CreateManyLLMQueryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyLLMQueryResolver {
    createManyLLMQuery(ctx: any, info: GraphQLResolveInfo, args: CreateManyLLMQueryArgs): Promise<AffectedRowsOutput>;
}
