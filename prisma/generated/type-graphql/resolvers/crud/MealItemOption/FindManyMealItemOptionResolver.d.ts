import { GraphQLResolveInfo } from "graphql";
import { FindManyMealItemOptionArgs } from "./args/FindManyMealItemOptionArgs";
import { MealItemOption } from "../../../models/MealItemOption";
export declare class FindManyMealItemOptionResolver {
    mealItemOptions(ctx: any, info: GraphQLResolveInfo, args: FindManyMealItemOptionArgs): Promise<MealItemOption[]>;
}
