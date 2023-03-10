import { GraphQLResolveInfo } from "graphql";
import { UpdateMealAvailabilityArgs } from "./args/UpdateMealAvailabilityArgs";
import { MealAvailability } from "../../../models/MealAvailability";
export declare class UpdateMealAvailabilityResolver {
    updateMealAvailability(ctx: any, info: GraphQLResolveInfo, args: UpdateMealAvailabilityArgs): Promise<MealAvailability | null>;
}
