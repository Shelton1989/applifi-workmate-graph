import { Episode } from "../models/Episode";
import { Post } from "../models/Post";
import { Reaction } from "../models/Reaction";
import { Topic } from "../models/Topic";
import { SeasonSeriesCount } from "../resolvers/outputs/SeasonSeriesCount";
export declare class SeasonSeries {
    id: string;
    seasonOrSeriesNumber: number;
    title: string;
    year: string;
    poster: string;
    overview: string;
    trailer: string;
    coverImage: string;
    tagline: string;
    Topic?: Topic;
    topicId: string;
    Reactions?: Reaction[];
    Episodes?: Episode[];
    Posts?: Post[];
    createdAt: Date;
    updatedAt: Date;
    _count?: SeasonSeriesCount | null;
}
