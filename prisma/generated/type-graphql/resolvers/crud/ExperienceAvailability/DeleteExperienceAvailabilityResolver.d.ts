import { GraphQLResolveInfo } from "graphql";
import { DeleteExperienceAvailabilityArgs } from "./args/DeleteExperienceAvailabilityArgs";
import { ExperienceAvailability } from "../../../models/ExperienceAvailability";
export declare class DeleteExperienceAvailabilityResolver {
    deleteExperienceAvailability(ctx: any, info: GraphQLResolveInfo, args: DeleteExperienceAvailabilityArgs): Promise<ExperienceAvailability | null>;
}
