import { SeasonSeriesAvgAggregate } from "../outputs/SeasonSeriesAvgAggregate";
import { SeasonSeriesCountAggregate } from "../outputs/SeasonSeriesCountAggregate";
import { SeasonSeriesMaxAggregate } from "../outputs/SeasonSeriesMaxAggregate";
import { SeasonSeriesMinAggregate } from "../outputs/SeasonSeriesMinAggregate";
import { SeasonSeriesSumAggregate } from "../outputs/SeasonSeriesSumAggregate";
export declare class AggregateSeasonSeries {
    _count: SeasonSeriesCountAggregate | null;
    _avg: SeasonSeriesAvgAggregate | null;
    _sum: SeasonSeriesSumAggregate | null;
    _min: SeasonSeriesMinAggregate | null;
    _max: SeasonSeriesMaxAggregate | null;
}
