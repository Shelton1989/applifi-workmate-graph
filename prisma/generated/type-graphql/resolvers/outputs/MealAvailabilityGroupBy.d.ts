import { MealAvailabilityCountAggregate } from "../outputs/MealAvailabilityCountAggregate";
import { MealAvailabilityMaxAggregate } from "../outputs/MealAvailabilityMaxAggregate";
import { MealAvailabilityMinAggregate } from "../outputs/MealAvailabilityMinAggregate";
export declare class MealAvailabilityGroupBy {
    id: string;
    mealId: string;
    startDate: Date | null;
    endDate: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: MealAvailabilityCountAggregate | null;
    _min: MealAvailabilityMinAggregate | null;
    _max: MealAvailabilityMaxAggregate | null;
}
