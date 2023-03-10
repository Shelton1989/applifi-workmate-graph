import { GraphQLResolveInfo } from "graphql";
import { UpsertMealArgs } from "./args/UpsertMealArgs";
import { Meal } from "../../../models/Meal";
export declare class UpsertMealResolver {
    upsertMeal(ctx: any, info: GraphQLResolveInfo, args: UpsertMealArgs): Promise<Meal>;
}
