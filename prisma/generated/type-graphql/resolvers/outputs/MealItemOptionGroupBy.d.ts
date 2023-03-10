import { MealItemOptionCountAggregate } from "../outputs/MealItemOptionCountAggregate";
import { MealItemOptionMaxAggregate } from "../outputs/MealItemOptionMaxAggregate";
import { MealItemOptionMinAggregate } from "../outputs/MealItemOptionMinAggregate";
export declare class MealItemOptionGroupBy {
    id: string;
    mealItemId: string;
    title: string;
    shortDescription: string;
    createdAt: Date;
    updatedAt: Date;
    _count: MealItemOptionCountAggregate | null;
    _min: MealItemOptionMinAggregate | null;
    _max: MealItemOptionMaxAggregate | null;
}
