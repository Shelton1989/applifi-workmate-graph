import { AggregateRating } from "../../../models/AggregateRating";
import { Meal } from "../../../models/Meal";
export declare class AggregateRatingRelationsResolver {
    Meal(aggregateRating: AggregateRating, ctx: any): Promise<Meal | null>;
}
