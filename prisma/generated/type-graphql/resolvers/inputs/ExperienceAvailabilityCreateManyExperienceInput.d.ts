export declare class ExperienceAvailabilityCreateManyExperienceInput {
    id?: string | undefined;
    startDate?: Date | undefined;
    endDate?: Date | undefined;
    availabilityType?: "WEEKEND" | "DAILY" | "HOURLY" | "HALF_HOURLY" | undefined;
    spacesAvailable: number;
    spacesBooked: number;
    datesAreFlexible?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
