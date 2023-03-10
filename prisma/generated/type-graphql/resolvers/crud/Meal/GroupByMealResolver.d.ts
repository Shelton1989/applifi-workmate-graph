import { GraphQLResolveInfo } from "graphql";
import { GroupByMealArgs } from "./args/GroupByMealArgs";
import { MealGroupBy } from "../../outputs/MealGroupBy";
export declare class GroupByMealResolver {
    groupByMeal(ctx: any, info: GraphQLResolveInfo, args: GroupByMealArgs): Promise<MealGroupBy[]>;
}
