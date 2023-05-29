import { GraphQLResolveInfo } from "graphql";
import { AggregateLLMQueryArgs } from "./args/AggregateLLMQueryArgs";
import { AggregateLLMQuery } from "../../outputs/AggregateLLMQuery";
export declare class AggregateLLMQueryResolver {
    aggregateLLMQuery(ctx: any, info: GraphQLResolveInfo, args: AggregateLLMQueryArgs): Promise<AggregateLLMQuery>;
}
