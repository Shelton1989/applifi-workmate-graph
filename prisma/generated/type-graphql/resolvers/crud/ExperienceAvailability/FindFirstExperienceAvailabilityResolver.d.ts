import { GraphQLResolveInfo } from "graphql";
import { FindFirstExperienceAvailabilityArgs } from "./args/FindFirstExperienceAvailabilityArgs";
import { ExperienceAvailability } from "../../../models/ExperienceAvailability";
export declare class FindFirstExperienceAvailabilityResolver {
    findFirstExperienceAvailability(ctx: any, info: GraphQLResolveInfo, args: FindFirstExperienceAvailabilityArgs): Promise<ExperienceAvailability | null>;
}
