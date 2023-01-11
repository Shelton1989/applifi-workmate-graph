import { AggregateRating } from "../../../models/AggregateRating";
import { Experience } from "../../../models/Experience";
export declare class AggregateRatingRelationsResolver {
    Experience(aggregateRating: AggregateRating, ctx: any): Promise<Experience | null>;
}
