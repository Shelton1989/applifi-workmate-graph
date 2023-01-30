export declare class ExperienceAvailabilityMinAggregate {
    id: string | null;
    experienceId: string | null;
    startDate: Date | null;
    endDate: Date | null;
    availabilityType: "WEEKEND" | "DAILY" | "HOURLY" | "HALF_HOURLY" | null;
    spacesAvailable: number | null;
    spacesBooked: number | null;
    datesAreFlexible: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}
