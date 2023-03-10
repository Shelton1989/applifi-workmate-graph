import { GraphQLResolveInfo } from "graphql";
import { CreateMealAvailabilityArgs } from "./args/CreateMealAvailabilityArgs";
import { MealAvailability } from "../../../models/MealAvailability";
export declare class CreateMealAvailabilityResolver {
    createMealAvailability(ctx: any, info: GraphQLResolveInfo, args: CreateMealAvailabilityArgs): Promise<MealAvailability>;
}
