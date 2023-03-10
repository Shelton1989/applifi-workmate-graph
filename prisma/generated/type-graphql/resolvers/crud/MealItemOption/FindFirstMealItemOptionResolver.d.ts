import { GraphQLResolveInfo } from "graphql";
import { FindFirstMealItemOptionArgs } from "./args/FindFirstMealItemOptionArgs";
import { MealItemOption } from "../../../models/MealItemOption";
export declare class FindFirstMealItemOptionResolver {
    findFirstMealItemOption(ctx: any, info: GraphQLResolveInfo, args: FindFirstMealItemOptionArgs): Promise<MealItemOption | null>;
}
