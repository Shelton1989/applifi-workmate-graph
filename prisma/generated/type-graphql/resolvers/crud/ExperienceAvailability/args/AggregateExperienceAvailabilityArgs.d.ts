import { ExperienceAvailabilityOrderByWithRelationInput } from "../../../inputs/ExperienceAvailabilityOrderByWithRelationInput";
import { ExperienceAvailabilityWhereInput } from "../../../inputs/ExperienceAvailabilityWhereInput";
import { ExperienceAvailabilityWhereUniqueInput } from "../../../inputs/ExperienceAvailabilityWhereUniqueInput";
export declare class AggregateExperienceAvailabilityArgs {
    where?: ExperienceAvailabilityWhereInput | undefined;
    orderBy?: ExperienceAvailabilityOrderByWithRelationInput[] | undefined;
    cursor?: ExperienceAvailabilityWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
