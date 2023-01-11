import { Experience } from "../models/Experience";
export declare class ExperienceAvailability {
    id: string;
    Experience?: Experience;
    experienceId: string;
    startDate: Date;
    endDate: Date;
    availabilityType: "WEEKEND" | "DAILY" | "HOURLY" | "HALF_HOURLY";
    weekendSpacesAvailable: number;
    dailySpacesAvailable: number;
    hourlySpacesAvailable: number;
    halfHourlySpacesAvailable: number;
    createdAt: Date;
    updatedAt: Date;
}
