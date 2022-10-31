import { EpisodeAvgAggregate } from "../outputs/EpisodeAvgAggregate";
import { EpisodeCountAggregate } from "../outputs/EpisodeCountAggregate";
import { EpisodeMaxAggregate } from "../outputs/EpisodeMaxAggregate";
import { EpisodeMinAggregate } from "../outputs/EpisodeMinAggregate";
import { EpisodeSumAggregate } from "../outputs/EpisodeSumAggregate";
export declare class EpisodeGroupBy {
    id: string;
    episodeNumber: number;
    title: string;
    year: string;
    poster: string;
    overview: string;
    trailer: string;
    coverImage: string;
    tagline: string;
    seasonSeriesId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: EpisodeCountAggregate | null;
    _avg: EpisodeAvgAggregate | null;
    _sum: EpisodeSumAggregate | null;
    _min: EpisodeMinAggregate | null;
    _max: EpisodeMaxAggregate | null;
}
