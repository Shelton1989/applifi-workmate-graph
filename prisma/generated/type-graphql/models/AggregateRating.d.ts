import { Episode } from "../models/Episode";
import { SeasonSeries } from "../models/SeasonSeries";
import { Topic } from "../models/Topic";
export declare class AggregateRating {
    id: string;
    ratingValue: number;
    countedPosts?: number | null;
    allPosts?: number | null;
    ratingCount?: number | null;
    Topic?: Topic | null;
    SeasonSeries?: SeasonSeries | null;
    Episode?: Episode | null;
    createdAt: Date;
    updatedAt: Date;
}
