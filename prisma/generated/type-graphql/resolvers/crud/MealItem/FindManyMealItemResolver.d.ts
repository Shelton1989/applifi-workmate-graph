import { GraphQLResolveInfo } from "graphql";
import { FindManyMealItemArgs } from "./args/FindManyMealItemArgs";
import { MealItem } from "../../../models/MealItem";
export declare class FindManyMealItemResolver {
    mealItems(ctx: any, info: GraphQLResolveInfo, args: FindManyMealItemArgs): Promise<MealItem[]>;
}
