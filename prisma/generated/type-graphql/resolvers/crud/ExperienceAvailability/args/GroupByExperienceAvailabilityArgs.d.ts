import { ExperienceAvailabilityOrderByWithAggregationInput } from "../../../inputs/ExperienceAvailabilityOrderByWithAggregationInput";
import { ExperienceAvailabilityScalarWhereWithAggregatesInput } from "../../../inputs/ExperienceAvailabilityScalarWhereWithAggregatesInput";
import { ExperienceAvailabilityWhereInput } from "../../../inputs/ExperienceAvailabilityWhereInput";
export declare class GroupByExperienceAvailabilityArgs {
    where?: ExperienceAvailabilityWhereInput | undefined;
    orderBy?: ExperienceAvailabilityOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "experienceId" | "startDate" | "endDate" | "availabilityType" | "weekendSpacesAvailable" | "dailySpacesAvailable" | "hourlySpacesAvailable" | "halfHourlySpacesAvailable" | "createdAt" | "updatedAt">;
    having?: ExperienceAvailabilityScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
