import { GraphQLResolveInfo } from "graphql";
import { UpsertMealAvailabilityArgs } from "./args/UpsertMealAvailabilityArgs";
import { MealAvailability } from "../../../models/MealAvailability";
export declare class UpsertMealAvailabilityResolver {
    upsertMealAvailability(ctx: any, info: GraphQLResolveInfo, args: UpsertMealAvailabilityArgs): Promise<MealAvailability>;
}
