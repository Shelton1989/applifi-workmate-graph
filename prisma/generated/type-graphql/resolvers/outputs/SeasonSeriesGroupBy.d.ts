import { SeasonSeriesAvgAggregate } from "../outputs/SeasonSeriesAvgAggregate";
import { SeasonSeriesCountAggregate } from "../outputs/SeasonSeriesCountAggregate";
import { SeasonSeriesMaxAggregate } from "../outputs/SeasonSeriesMaxAggregate";
import { SeasonSeriesMinAggregate } from "../outputs/SeasonSeriesMinAggregate";
import { SeasonSeriesSumAggregate } from "../outputs/SeasonSeriesSumAggregate";
export declare class SeasonSeriesGroupBy {
    id: string;
    seasonOrSeriesNumber: number;
    title: string;
    year: string;
    poster: string;
    overview: string;
    trailer: string;
    coverImage: string;
    tagline: string;
    topicId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: SeasonSeriesCountAggregate | null;
    _avg: SeasonSeriesAvgAggregate | null;
    _sum: SeasonSeriesSumAggregate | null;
    _min: SeasonSeriesMinAggregate | null;
    _max: SeasonSeriesMaxAggregate | null;
}
