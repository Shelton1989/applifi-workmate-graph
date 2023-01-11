import { GraphQLResolveInfo } from "graphql";
import { CreateExperienceAvailabilityArgs } from "./args/CreateExperienceAvailabilityArgs";
import { ExperienceAvailability } from "../../../models/ExperienceAvailability";
export declare class CreateExperienceAvailabilityResolver {
    createExperienceAvailability(ctx: any, info: GraphQLResolveInfo, args: CreateExperienceAvailabilityArgs): Promise<ExperienceAvailability>;
}
