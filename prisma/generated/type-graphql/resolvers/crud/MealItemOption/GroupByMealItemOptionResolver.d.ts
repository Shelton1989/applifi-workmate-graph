import { GraphQLResolveInfo } from "graphql";
import { GroupByMealItemOptionArgs } from "./args/GroupByMealItemOptionArgs";
import { MealItemOptionGroupBy } from "../../outputs/MealItemOptionGroupBy";
export declare class GroupByMealItemOptionResolver {
    groupByMealItemOption(ctx: any, info: GraphQLResolveInfo, args: GroupByMealItemOptionArgs): Promise<MealItemOptionGroupBy[]>;
}
