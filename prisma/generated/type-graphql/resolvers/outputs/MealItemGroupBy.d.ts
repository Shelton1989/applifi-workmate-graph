import { MealItemCountAggregate } from "../outputs/MealItemCountAggregate";
import { MealItemMaxAggregate } from "../outputs/MealItemMaxAggregate";
import { MealItemMinAggregate } from "../outputs/MealItemMinAggregate";
export declare class MealItemGroupBy {
    id: string;
    mealIds: string[] | null;
    title: string;
    shortDescription: string;
    createdAt: Date;
    updatedAt: Date;
    _count: MealItemCountAggregate | null;
    _min: MealItemMinAggregate | null;
    _max: MealItemMaxAggregate | null;
}
