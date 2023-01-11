import { ExperienceAvgAggregate } from "../outputs/ExperienceAvgAggregate";
import { ExperienceCountAggregate } from "../outputs/ExperienceCountAggregate";
import { ExperienceMaxAggregate } from "../outputs/ExperienceMaxAggregate";
import { ExperienceMinAggregate } from "../outputs/ExperienceMinAggregate";
import { ExperienceSumAggregate } from "../outputs/ExperienceSumAggregate";
export declare class AggregateExperience {
    _count: ExperienceCountAggregate | null;
    _avg: ExperienceAvgAggregate | null;
    _sum: ExperienceSumAggregate | null;
    _min: ExperienceMinAggregate | null;
    _max: ExperienceMaxAggregate | null;
}
