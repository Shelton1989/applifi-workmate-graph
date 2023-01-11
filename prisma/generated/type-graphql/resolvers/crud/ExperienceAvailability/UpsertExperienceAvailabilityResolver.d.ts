import { GraphQLResolveInfo } from "graphql";
import { UpsertExperienceAvailabilityArgs } from "./args/UpsertExperienceAvailabilityArgs";
import { ExperienceAvailability } from "../../../models/ExperienceAvailability";
export declare class UpsertExperienceAvailabilityResolver {
    upsertExperienceAvailability(ctx: any, info: GraphQLResolveInfo, args: UpsertExperienceAvailabilityArgs): Promise<ExperienceAvailability>;
}
