import { GraphQLResolveInfo } from "graphql";
import { FindFirstMealAvailabilityArgs } from "./args/FindFirstMealAvailabilityArgs";
import { MealAvailability } from "../../../models/MealAvailability";
export declare class FindFirstMealAvailabilityResolver {
    findFirstMealAvailability(ctx: any, info: GraphQLResolveInfo, args: FindFirstMealAvailabilityArgs): Promise<MealAvailability | null>;
}
