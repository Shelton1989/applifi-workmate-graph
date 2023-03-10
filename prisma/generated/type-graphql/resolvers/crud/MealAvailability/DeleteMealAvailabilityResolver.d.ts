import { GraphQLResolveInfo } from "graphql";
import { DeleteMealAvailabilityArgs } from "./args/DeleteMealAvailabilityArgs";
import { MealAvailability } from "../../../models/MealAvailability";
export declare class DeleteMealAvailabilityResolver {
    deleteMealAvailability(ctx: any, info: GraphQLResolveInfo, args: DeleteMealAvailabilityArgs): Promise<MealAvailability | null>;
}
