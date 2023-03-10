import { GraphQLResolveInfo } from "graphql";
import { FindManyMealAvailabilityArgs } from "./args/FindManyMealAvailabilityArgs";
import { MealAvailability } from "../../../models/MealAvailability";
export declare class FindManyMealAvailabilityResolver {
    mealAvailabilities(ctx: any, info: GraphQLResolveInfo, args: FindManyMealAvailabilityArgs): Promise<MealAvailability[]>;
}
