import { GraphQLResolveInfo } from "graphql";
import { FindUniqueMealAvailabilityArgs } from "./args/FindUniqueMealAvailabilityArgs";
import { MealAvailability } from "../../../models/MealAvailability";
export declare class FindUniqueMealAvailabilityResolver {
    mealAvailability(ctx: any, info: GraphQLResolveInfo, args: FindUniqueMealAvailabilityArgs): Promise<MealAvailability | null>;
}
