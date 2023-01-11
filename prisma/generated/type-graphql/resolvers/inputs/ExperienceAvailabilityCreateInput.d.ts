import { ExperienceCreateNestedOneWithoutAvailabilityInput } from "../inputs/ExperienceCreateNestedOneWithoutAvailabilityInput";
export declare class ExperienceAvailabilityCreateInput {
    id?: string | undefined;
    Experience: ExperienceCreateNestedOneWithoutAvailabilityInput;
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
