import { GraphQLResolveInfo } from "graphql";
import { GroupByLLMQueryArgs } from "./args/GroupByLLMQueryArgs";
import { LLMQueryGroupBy } from "../../outputs/LLMQueryGroupBy";
export declare class GroupByLLMQueryResolver {
    groupByLLMQuery(ctx: any, info: GraphQLResolveInfo, args: GroupByLLMQueryArgs): Promise<LLMQueryGroupBy[]>;
}
