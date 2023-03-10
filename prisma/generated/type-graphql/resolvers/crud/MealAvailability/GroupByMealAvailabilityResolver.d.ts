import { GraphQLResolveInfo } from "graphql";
import { GroupByMealAvailabilityArgs } from "./args/GroupByMealAvailabilityArgs";
import { MealAvailabilityGroupBy } from "../../outputs/MealAvailabilityGroupBy";
export declare class GroupByMealAvailabilityResolver {
    groupByMealAvailability(ctx: any, info: GraphQLResolveInfo, args: GroupByMealAvailabilityArgs): Promise<MealAvailabilityGroupBy[]>;
}
