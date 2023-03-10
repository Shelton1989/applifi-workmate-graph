import { MealAvailabilityCountAggregate } from "../outputs/MealAvailabilityCountAggregate";
import { MealAvailabilityMaxAggregate } from "../outputs/MealAvailabilityMaxAggregate";
import { MealAvailabilityMinAggregate } from "../outputs/MealAvailabilityMinAggregate";
export declare class AggregateMealAvailability {
    _count: MealAvailabilityCountAggregate | null;
    _min: MealAvailabilityMinAggregate | null;
    _max: MealAvailabilityMaxAggregate | null;
}
