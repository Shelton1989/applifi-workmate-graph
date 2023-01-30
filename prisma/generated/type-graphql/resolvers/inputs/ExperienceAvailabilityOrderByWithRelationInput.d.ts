import { ExperienceOrderByWithRelationInput } from "../inputs/ExperienceOrderByWithRelationInput";
export declare class ExperienceAvailabilityOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    Experience?: ExperienceOrderByWithRelationInput | undefined;
    experienceId?: "asc" | "desc" | undefined;
    startDate?: "asc" | "desc" | undefined;
    endDate?: "asc" | "desc" | undefined;
    availabilityType?: "asc" | "desc" | undefined;
    spacesAvailable?: "asc" | "desc" | undefined;
    spacesBooked?: "asc" | "desc" | undefined;
    datesAreFlexible?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
