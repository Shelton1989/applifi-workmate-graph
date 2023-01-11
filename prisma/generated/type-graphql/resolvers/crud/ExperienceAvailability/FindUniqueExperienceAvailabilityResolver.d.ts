import { GraphQLResolveInfo } from "graphql";
import { FindUniqueExperienceAvailabilityArgs } from "./args/FindUniqueExperienceAvailabilityArgs";
import { ExperienceAvailability } from "../../../models/ExperienceAvailability";
export declare class FindUniqueExperienceAvailabilityResolver {
    experienceAvailability(ctx: any, info: GraphQLResolveInfo, args: FindUniqueExperienceAvailabilityArgs): Promise<ExperienceAvailability | null>;
}
