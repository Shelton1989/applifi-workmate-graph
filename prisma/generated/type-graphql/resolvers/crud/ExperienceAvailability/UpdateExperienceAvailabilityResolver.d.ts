import { GraphQLResolveInfo } from "graphql";
import { UpdateExperienceAvailabilityArgs } from "./args/UpdateExperienceAvailabilityArgs";
import { ExperienceAvailability } from "../../../models/ExperienceAvailability";
export declare class UpdateExperienceAvailabilityResolver {
    updateExperienceAvailability(ctx: any, info: GraphQLResolveInfo, args: UpdateExperienceAvailabilityArgs): Promise<ExperienceAvailability | null>;
}
