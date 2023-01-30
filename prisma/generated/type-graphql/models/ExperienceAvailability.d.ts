import { Experience } from "../models/Experience";
export declare class ExperienceAvailability {
    id: string;
    Experience?: Experience;
    experienceId: string;
    startDate?: Date | null;
    endDate?: Date | null;
    availabilityType: "WEEKEND" | "DAILY" | "HOURLY" | "HALF_HOURLY";
    spacesAvailable: number;
    spacesBooked: number;
    datesAreFlexible: boolean;
    createdAt: Date;
    updatedAt: Date;
}
