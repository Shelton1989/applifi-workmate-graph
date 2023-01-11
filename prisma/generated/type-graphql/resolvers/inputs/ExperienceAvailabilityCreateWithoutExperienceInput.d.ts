export declare class ExperienceAvailabilityCreateWithoutExperienceInput {
    id?: string | undefined;
    startDate: Date;
    endDate: Date;
    availabilityType?: "WEEKEND" | "DAILY" | "HOURLY" | "HALF_HOURLY" | undefined;
    weekendSpacesAvailable: number;
    dailySpacesAvailable: number;
    hourlySpacesAvailable: number;
    halfHourlySpacesAvailable: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
