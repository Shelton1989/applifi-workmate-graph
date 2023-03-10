import { GraphQLResolveInfo } from "graphql";
import { AggregateMealArgs } from "./args/AggregateMealArgs";
import { AggregateMeal } from "../../outputs/AggregateMeal";
export declare class AggregateMealResolver {
    aggregateMeal(ctx: any, info: GraphQLResolveInfo, args: AggregateMealArgs): Promise<AggregateMeal>;
}
