import { TopicCountAggregate } from "../outputs/TopicCountAggregate";
import { TopicMaxAggregate } from "../outputs/TopicMaxAggregate";
import { TopicMinAggregate } from "../outputs/TopicMinAggregate";
export declare class TopicGroupBy {
    id: string;
    title: string;
    year: string;
    poster: string;
    overview: string;
    trailer: string;
    coverImage: string;
    tagline: string;
    genres: string[] | null;
    creators: string[] | null;
    authors: string[] | null;
    artists: string[] | null;
    producers: string[] | null;
    directors: string[] | null;
    publishers: string[] | null;
    cast: string[] | null;
    type: string;
    releaseDate: Date;
    topicType: "MOVIE" | "SERIES" | "DOCUMENTARY" | "STREAMING_PLATFORM" | "OPINION_PIECE" | "NEWS_ENTITY" | "ARTICLE" | "PODCAST" | "BOOK";
    createdAt: Date;
    updatedAt: Date;
    _count: TopicCountAggregate | null;
    _min: TopicMinAggregate | null;
    _max: TopicMaxAggregate | null;
}
