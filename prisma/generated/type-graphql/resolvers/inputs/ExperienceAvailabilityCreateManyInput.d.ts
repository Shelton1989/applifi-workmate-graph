export declare class ExperienceAvailabilityCreateManyInput {
    id?: string | undefined;
    experienceId: string;
    startDate?: Date | undefined;
    endDate?: Date | undefined;
    availabilityType?: "WEEKEND" | "DAILY" | "HOURLY" | "HALF_HOURLY" | undefined;
    spacesAvailable: number;
    spacesBooked: number;
    datesAreFlexible?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
