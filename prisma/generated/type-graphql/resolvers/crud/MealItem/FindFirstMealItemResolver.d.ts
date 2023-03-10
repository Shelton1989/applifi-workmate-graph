import { GraphQLResolveInfo } from "graphql";
import { FindFirstMealItemArgs } from "./args/FindFirstMealItemArgs";
import { MealItem } from "../../../models/MealItem";
export declare class FindFirstMealItemResolver {
    findFirstMealItem(ctx: any, info: GraphQLResolveInfo, args: FindFirstMealItemArgs): Promise<MealItem | null>;
}
