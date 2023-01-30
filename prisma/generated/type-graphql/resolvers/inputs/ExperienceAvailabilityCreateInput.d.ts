import { ExperienceCreateNestedOneWithoutAvailabilityInput } from "../inputs/ExperienceCreateNestedOneWithoutAvailabilityInput";
export declare class ExperienceAvailabilityCreateInput {
    id?: string | undefined;
    Experience: ExperienceCreateNestedOneWithoutAvailabilityInput;
    startDate?: Date | undefined;
    endDate?: Date | undefined;
    availabilityType?: "WEEKEND" | "DAILY" | "HOURLY" | "HALF_HOURLY" | undefined;
    spacesAvailable: number;
    spacesBooked: number;
    datesAreFlexible?: boolean | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
