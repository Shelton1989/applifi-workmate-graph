import { GraphQLResolveInfo } from "graphql";
import { AggregateMealItemOptionArgs } from "./args/AggregateMealItemOptionArgs";
import { AggregateMealItemOption } from "../../outputs/AggregateMealItemOption";
export declare class AggregateMealItemOptionResolver {
    aggregateMealItemOption(ctx: any, info: GraphQLResolveInfo, args: AggregateMealItemOptionArgs): Promise<AggregateMealItemOption>;
}
