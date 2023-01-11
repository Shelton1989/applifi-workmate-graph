export declare class ExperienceAvailabilityMaxAggregate {
    id: string | null;
    experienceId: string | null;
    startDate: Date | null;
    endDate: Date | null;
    availabilityType: "WEEKEND" | "DAILY" | "HOURLY" | "HALF_HOURLY" | null;
    weekendSpacesAvailable: number | null;
    dailySpacesAvailable: number | null;
    hourlySpacesAvailable: number | null;
    halfHourlySpacesAvailable: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}
