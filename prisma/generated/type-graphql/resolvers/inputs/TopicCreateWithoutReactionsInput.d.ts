import { AggregateRatingCreateNestedOneWithoutTopicInput } from "../inputs/AggregateRatingCreateNestedOneWithoutTopicInput";
import { PostCreateNestedManyWithoutTopicInput } from "../inputs/PostCreateNestedManyWithoutTopicInput";
import { SeasonSeriesCreateNestedManyWithoutTopicInput } from "../inputs/SeasonSeriesCreateNestedManyWithoutTopicInput";
import { TopicCreateartistsInput } from "../inputs/TopicCreateartistsInput";
import { TopicCreateauthorsInput } from "../inputs/TopicCreateauthorsInput";
import { TopicCreatecastInput } from "../inputs/TopicCreatecastInput";
import { TopicCreatecreatorsInput } from "../inputs/TopicCreatecreatorsInput";
import { TopicCreatedirectorsInput } from "../inputs/TopicCreatedirectorsInput";
import { TopicCreategenresInput } from "../inputs/TopicCreategenresInput";
import { TopicCreateproducersInput } from "../inputs/TopicCreateproducersInput";
import { TopicCreatepublishersInput } from "../inputs/TopicCreatepublishersInput";
export declare class TopicCreateWithoutReactionsInput {
    id?: string | undefined;
    title: string;
    year: string;
    poster: string;
    overview: string;
    trailer: string;
    coverImage: string;
    tagline: string;
    genres?: TopicCreategenresInput | undefined;
    creators?: TopicCreatecreatorsInput | undefined;
    authors?: TopicCreateauthorsInput | undefined;
    artists?: TopicCreateartistsInput | undefined;
    producers?: TopicCreateproducersInput | undefined;
    directors?: TopicCreatedirectorsInput | undefined;
    publishers?: TopicCreatepublishersInput | undefined;
    cast?: TopicCreatecastInput | undefined;
    type: string;
    tmdbId?: number | undefined;
    releaseDate: Date;
    AggregateRating?: AggregateRatingCreateNestedOneWithoutTopicInput | undefined;
    SeasonSeries?: SeasonSeriesCreateNestedManyWithoutTopicInput | undefined;
    Posts?: PostCreateNestedManyWithoutTopicInput | undefined;
    topicType?: "MOVIE" | "SERIES" | "DOCUMENTARY" | "STREAMING_PLATFORM" | "OPINION_PIECE" | "NEWS_ENTITY" | "ARTICLE" | "PODCAST" | "BOOK" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
