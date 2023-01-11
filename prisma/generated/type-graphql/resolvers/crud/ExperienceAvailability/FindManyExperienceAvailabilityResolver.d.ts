import { GraphQLResolveInfo } from "graphql";
import { FindManyExperienceAvailabilityArgs } from "./args/FindManyExperienceAvailabilityArgs";
import { ExperienceAvailability } from "../../../models/ExperienceAvailability";
export declare class FindManyExperienceAvailabilityResolver {
    experienceAvailabilities(ctx: any, info: GraphQLResolveInfo, args: FindManyExperienceAvailabilityArgs): Promise<ExperienceAvailability[]>;
}
