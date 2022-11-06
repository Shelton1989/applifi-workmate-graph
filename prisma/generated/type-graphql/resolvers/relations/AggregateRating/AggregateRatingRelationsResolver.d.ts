import { AggregateRating } from "../../../models/AggregateRating";
import { Episode } from "../../../models/Episode";
import { SeasonSeries } from "../../../models/SeasonSeries";
import { Topic } from "../../../models/Topic";
export declare class AggregateRatingRelationsResolver {
    Topic(aggregateRating: AggregateRating, ctx: any): Promise<Topic | null>;
    SeasonSeries(aggregateRating: AggregateRating, ctx: any): Promise<SeasonSeries | null>;
    Episode(aggregateRating: AggregateRating, ctx: any): Promise<Episode | null>;
}
