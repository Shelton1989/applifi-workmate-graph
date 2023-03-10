import { FeaturesCountAggregate } from "../outputs/FeaturesCountAggregate";
import { FeaturesMaxAggregate } from "../outputs/FeaturesMaxAggregate";
import { FeaturesMinAggregate } from "../outputs/FeaturesMinAggregate";
export declare class FeaturesGroupBy {
    id: string;
    mealId: string;
    title: string;
    shortDescription: string;
    createdAt: Date;
    updatedAt: Date;
    _count: FeaturesCountAggregate | null;
    _min: FeaturesMinAggregate | null;
    _max: FeaturesMaxAggregate | null;
}
