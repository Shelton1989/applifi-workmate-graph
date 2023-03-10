import { GraphQLResolveInfo } from "graphql";
import { CreateMealItemOptionArgs } from "./args/CreateMealItemOptionArgs";
import { MealItemOption } from "../../../models/MealItemOption";
export declare class CreateMealItemOptionResolver {
    createMealItemOption(ctx: any, info: GraphQLResolveInfo, args: CreateMealItemOptionArgs): Promise<MealItemOption>;
}
