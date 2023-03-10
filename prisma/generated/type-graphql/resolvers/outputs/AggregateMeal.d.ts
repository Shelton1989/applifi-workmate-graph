import { MealCountAggregate } from "../outputs/MealCountAggregate";
import { MealMaxAggregate } from "../outputs/MealMaxAggregate";
import { MealMinAggregate } from "../outputs/MealMinAggregate";
export declare class AggregateMeal {
    _count: MealCountAggregate | null;
    _min: MealMinAggregate | null;
    _max: MealMaxAggregate | null;
}
