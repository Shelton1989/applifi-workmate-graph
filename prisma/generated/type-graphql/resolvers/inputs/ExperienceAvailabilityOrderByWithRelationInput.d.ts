import { ExperienceOrderByWithRelationInput } from "../inputs/ExperienceOrderByWithRelationInput";
export declare class ExperienceAvailabilityOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    Experience?: ExperienceOrderByWithRelationInput | undefined;
    experienceId?: "asc" | "desc" | undefined;
    startDate?: "asc" | "desc" | undefined;
    endDate?: "asc" | "desc" | undefined;
    availabilityType?: "asc" | "desc" | undefined;
    weekendSpacesAvailable?: "asc" | "desc" | undefined;
    dailySpacesAvailable?: "asc" | "desc" | undefined;
    hourlySpacesAvailable?: "asc" | "desc" | undefined;
    halfHourlySpacesAvailable?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
