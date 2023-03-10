import { GraphQLResolveInfo } from "graphql";
import { CreateMealArgs } from "./args/CreateMealArgs";
import { Meal } from "../../../models/Meal";
export declare class CreateMealResolver {
    createMeal(ctx: any, info: GraphQLResolveInfo, args: CreateMealArgs): Promise<Meal>;
}
