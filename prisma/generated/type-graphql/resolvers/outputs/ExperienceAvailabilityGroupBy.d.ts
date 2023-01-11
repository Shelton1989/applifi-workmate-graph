import { ExperienceAvailabilityAvgAggregate } from "../outputs/ExperienceAvailabilityAvgAggregate";
import { ExperienceAvailabilityCountAggregate } from "../outputs/ExperienceAvailabilityCountAggregate";
import { ExperienceAvailabilityMaxAggregate } from "../outputs/ExperienceAvailabilityMaxAggregate";
import { ExperienceAvailabilityMinAggregate } from "../outputs/ExperienceAvailabilityMinAggregate";
import { ExperienceAvailabilitySumAggregate } from "../outputs/ExperienceAvailabilitySumAggregate";
export declare class ExperienceAvailabilityGroupBy {
    id: string;
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
    _count: ExperienceAvailabilityCountAggregate | null;
    _avg: ExperienceAvailabilityAvgAggregate | null;
    _sum: ExperienceAvailabilitySumAggregate | null;
    _min: ExperienceAvailabilityMinAggregate | null;
    _max: ExperienceAvailabilityMaxAggregate | null;
}
