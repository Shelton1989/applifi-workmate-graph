import { AggregateRating } from "../models/AggregateRating";
import { Post } from "../models/Post";
import { Reaction } from "../models/Reaction";
import { SeasonSeries } from "../models/SeasonSeries";
import { EpisodeCount } from "../resolvers/outputs/EpisodeCount";
export declare class Episode {
    id: string;
    episodeNumber: number;
    title: string;
    year: string;
    poster: string;
    overview: string;
    trailer: string;
    coverImage: string;
    tagline: string;
    releaseDate: Date;
    SeasonSeries?: SeasonSeries;
    seasonSeriesId: string;
    AggregateRating?: AggregateRating | null;
    Reactions?: Reaction[];
    Posts?: Post[];
    createdAt: Date;
    updatedAt: Date;
    _count?: EpisodeCount | null;
}
