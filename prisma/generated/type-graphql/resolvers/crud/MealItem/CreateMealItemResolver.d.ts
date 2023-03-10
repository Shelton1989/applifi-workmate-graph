import { GraphQLResolveInfo } from "graphql";
import { CreateMealItemArgs } from "./args/CreateMealItemArgs";
import { MealItem } from "../../../models/MealItem";
export declare class CreateMealItemResolver {
    createMealItem(ctx: any, info: GraphQLResolveInfo, args: CreateMealItemArgs): Promise<MealItem>;
}
