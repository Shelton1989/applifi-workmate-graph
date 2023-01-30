import { ExperienceAvailabilityOrderByWithRelationInput } from "../../../inputs/ExperienceAvailabilityOrderByWithRelationInput";
import { ExperienceAvailabilityWhereInput } from "../../../inputs/ExperienceAvailabilityWhereInput";
import { ExperienceAvailabilityWhereUniqueInput } from "../../../inputs/ExperienceAvailabilityWhereUniqueInput";
export declare class FindManyExperienceAvailabilityArgs {
    where?: ExperienceAvailabilityWhereInput | undefined;
    orderBy?: ExperienceAvailabilityOrderByWithRelationInput[] | undefined;
    cursor?: ExperienceAvailabilityWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "experienceId" | "startDate" | "endDate" | "availabilityType" | "spacesAvailable" | "spacesBooked" | "datesAreFlexible" | "createdAt" | "updatedAt"> | undefined;
}
