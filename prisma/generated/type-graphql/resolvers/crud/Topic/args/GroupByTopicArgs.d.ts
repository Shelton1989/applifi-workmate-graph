import { TopicOrderByWithAggregationInput } from "../../../inputs/TopicOrderByWithAggregationInput";
import { TopicScalarWhereWithAggregatesInput } from "../../../inputs/TopicScalarWhereWithAggregatesInput";
import { TopicWhereInput } from "../../../inputs/TopicWhereInput";
export declare class GroupByTopicArgs {
    where?: TopicWhereInput | undefined;
    orderBy?: TopicOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "year" | "poster" | "overview" | "trailer" | "coverImage" | "tagline" | "genres" | "creators" | "authors" | "artists" | "producers" | "directors" | "publishers" | "cast" | "type" | "tmdbId" | "releaseDate" | "aggregateRatingId" | "topicType" | "createdAt" | "updatedAt">;
    having?: TopicScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
