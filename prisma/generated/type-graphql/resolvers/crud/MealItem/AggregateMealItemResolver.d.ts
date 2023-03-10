import { GraphQLResolveInfo } from "graphql";
import { AggregateMealItemArgs } from "./args/AggregateMealItemArgs";
import { AggregateMealItem } from "../../outputs/AggregateMealItem";
export declare class AggregateMealItemResolver {
    aggregateMealItem(ctx: any, info: GraphQLResolveInfo, args: AggregateMealItemArgs): Promise<AggregateMealItem>;
}
