import { GraphQLResolveInfo } from "graphql";
import { FindFirstMealArgs } from "./args/FindFirstMealArgs";
import { Meal } from "../../../models/Meal";
export declare class FindFirstMealResolver {
    findFirstMeal(ctx: any, info: GraphQLResolveInfo, args: FindFirstMealArgs): Promise<Meal | null>;
}
