import { GraphQLResolveInfo } from "graphql";
import { FindUniqueMealItemArgs } from "./args/FindUniqueMealItemArgs";
import { MealItem } from "../../../models/MealItem";
export declare class FindUniqueMealItemResolver {
    mealItem(ctx: any, info: GraphQLResolveInfo, args: FindUniqueMealItemArgs): Promise<MealItem | null>;
}
