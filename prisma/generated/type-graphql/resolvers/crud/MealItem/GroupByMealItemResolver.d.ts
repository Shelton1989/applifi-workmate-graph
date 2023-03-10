import { GraphQLResolveInfo } from "graphql";
import { GroupByMealItemArgs } from "./args/GroupByMealItemArgs";
import { MealItemGroupBy } from "../../outputs/MealItemGroupBy";
export declare class GroupByMealItemResolver {
    groupByMealItem(ctx: any, info: GraphQLResolveInfo, args: GroupByMealItemArgs): Promise<MealItemGroupBy[]>;
}
