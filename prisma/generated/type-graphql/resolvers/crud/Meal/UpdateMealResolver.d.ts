import { GraphQLResolveInfo } from "graphql";
import { UpdateMealArgs } from "./args/UpdateMealArgs";
import { Meal } from "../../../models/Meal";
export declare class UpdateMealResolver {
    updateMeal(ctx: any, info: GraphQLResolveInfo, args: UpdateMealArgs): Promise<Meal | null>;
}
