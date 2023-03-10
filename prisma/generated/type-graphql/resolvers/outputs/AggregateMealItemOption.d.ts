import { MealItemOptionCountAggregate } from "../outputs/MealItemOptionCountAggregate";
import { MealItemOptionMaxAggregate } from "../outputs/MealItemOptionMaxAggregate";
import { MealItemOptionMinAggregate } from "../outputs/MealItemOptionMinAggregate";
export declare class AggregateMealItemOption {
    _count: MealItemOptionCountAggregate | null;
    _min: MealItemOptionMinAggregate | null;
    _max: MealItemOptionMaxAggregate | null;
}
