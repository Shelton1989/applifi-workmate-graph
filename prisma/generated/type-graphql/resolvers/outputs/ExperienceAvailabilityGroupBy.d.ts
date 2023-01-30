import { ExperienceAvailabilityAvgAggregate } from "../outputs/ExperienceAvailabilityAvgAggregate";
import { ExperienceAvailabilityCountAggregate } from "../outputs/ExperienceAvailabilityCountAggregate";
import { ExperienceAvailabilityMaxAggregate } from "../outputs/ExperienceAvailabilityMaxAggregate";
import { ExperienceAvailabilityMinAggregate } from "../outputs/ExperienceAvailabilityMinAggregate";
import { ExperienceAvailabilitySumAggregate } from "../outputs/ExperienceAvailabilitySumAggregate";
export declare class ExperienceAvailabilityGroupBy {
    id: string;
    experienceId: string;
    startDate: Date | null;
    endDate: Date | null;
    availabilityType: "WEEKEND" | "DAILY" | "HOURLY" | "HALF_HOURLY";
    spacesAvailable: number;
    spacesBooked: number;
    datesAreFlexible: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ExperienceAvailabilityCountAggregate | null;
    _avg: ExperienceAvailabilityAvgAggregate | null;
    _sum: ExperienceAvailabilitySumAggregate | null;
    _min: ExperienceAvailabilityMinAggregate | null;
    _max: ExperienceAvailabilityMaxAggregate | null;
}
